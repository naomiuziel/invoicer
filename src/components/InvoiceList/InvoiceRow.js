import { Link } from "react-router-dom";
import { calculateInvoiceTotal } from "../../services/invoices";
import { formatMoney } from "../../services/string";
import InvoiceStatusLabel from './InvoiceStatusLabel';

const InvoiceRow = ({ invoice, onClickDelete }) => {
    return (
        <tr>
            <td>
                <Link to={`/invoice/${invoice.id}`}>
                    {invoice.reference}
                </Link>
            </td>

            <td>
                {invoice.recipient.name}
            </td>

            <td>
                <InvoiceStatusLabel invoice={invoice} />
            </td>

            <td>
                {formatMoney(calculateInvoiceTotal(invoice))}
            </td>

            <td className="text-end">
                <Link to={`invoice/${invoice.id}`} className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-pencil"></i>
                </Link>

                &nbsp;

                <a href="#" className="btn btn-danger btn-sm" onClick={onClickDelete}>
                    <i className="fa-solid fa-times"></i>
                </a>
            </td>
        </tr>
    );
}
 
export default InvoiceRow;