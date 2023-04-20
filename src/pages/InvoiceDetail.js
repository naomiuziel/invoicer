import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchInvoice, putInvoice } from "../data/invoices";
import { Link } from "react-router-dom";
import LineItemsTable from "../components/InvoiceList/InvoiceDetail/LineItemsTable";
import TotalsTable from "../components/InvoiceList/InvoiceDetail/TotalsTable";
import BillingInfo from "../components/InvoiceList/InvoiceDetail/BillingInfo";

const InvoiceDetail = () => {
    let { invoiceId } = useParams();

    const [hasMadeChanges, setHasMadeChanges] = useState(false);
    const [isLoadingInvoice, setIsLoadingInvoice] = useState(true);
    const [invoice, setInvoice] = useState(undefined);

    useEffect(() => {
        fetchInvoice(invoiceId).then(invoice => {
            setInvoice(invoice);
            setIsLoadingInvoice(false);
        })
    }, []);

    const updateInvoice = invoice => {
        setHasMadeChanges(true);
        setInvoice(invoice);
    };

    const onAddLineItem = lineItem => {
        setHasMadeChanges(true);

        setInvoice({
            ...invoice,
            lineItems: [
                ...invoice.lineItems,
                lineItem
            ]
        });
    };

    const onRemoveLineItem = uuidToRemove => {
        const newLineItems = invoice.lineItems.filter(lineItem => {
            return lineItem.uuid != uuidToRemove;
        });

        setInvoice({ ...invoice, lineItems: newLineItems });
    };

    const onClickSave = e => {
        e.preventDefault();
        
        putInvoice(invoice.id, invoice).then(() => {
            setHasMadeChanges(false);
            alert('Your invoice was saved successfully!');
        });
    };

    return (
        <div>
            {!isLoadingInvoice && (
                <div>
                    <h1 className="mb-0">
                        Invoice #{invoice.reference}
                    </h1>

                    <div className="mb-3">
                        <Link to="/">
                            <i className="fa-solid fa-arrow-left" /> Back to all invoices
                        </Link>
                    </div>

                    {hasMadeChanges && (
                        <div className="alert alert-warning">
                            <i className="fa-solid fa-circle-exclamation" /> You have edited this invoice but changes haven't been saved &nbsp;
                            <a href="#" className="btn btn-primary btn-sm" onClick={onClickSave}>
                                <i className="fa-solid fa-cloud"></i> Save invoice
                            </a>
                        </div>
                    )}

                    <BillingInfo invoice={invoice} updateInvoice={updateInvoice} />

                    <LineItemsTable
                        lineItems={invoice.lineItems}
                        onAddLineItem={onAddLineItem}
                        onRemoveLineItem={onRemoveLineItem}
                    />

                    <div className="d-flex justify-content-end">
                        <TotalsTable invoice={invoice} />
                    </div>

                    <div className="d-flex justify-content-center">
                        <a href="#" className="btn btn-primary" onClick={onClickSave}>
                            <i className="fa-solid fa-cloud"></i> Save invoice
                        </a>
                    </div>
                </div>
            )}

            {isLoadingInvoice && (
                <div className="text-center">
                    <em>Loading, please wait...</em>
                </div>
            )}
        </div>
    );
}
 
export default InvoiceDetail;