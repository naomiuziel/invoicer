import { useState } from "react";

const BillingInfo = ({ invoice, updateInvoice }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [recipientName, setRecipientName] = useState(invoice.recipient.name);
    const [recipientAddress, setRecipientAddress] = useState(invoice.recipient.address);

    const onClickEdit = (e) => {
        e.preventDefault();
        setIsEditing(true);
    };

    const onClickCancel = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const onChangeRecipientName = (e) => {
        setRecipientName(e.target.value);
    };

    const onChangeRecipientAddress = (e) => {
        setRecipientAddress(e.target.value);
    };

    const onClickSave = () => {
        updateInvoice({
            ...invoice,
            recipient: {
                name: recipientName,
                address: recipientAddress
            }
        });

        setIsEditing(false);
    };

    return (
        <div className="mb-3 billing-info">
            {isEditing && (
                <>
                    <div className="mb-1">
                        <strong>Billing to:</strong><br />

                        <input
                            type="text"
                            placeholder="Recipient name"
                            defaultValue={invoice.recipient.name}
                            className="form-control mb-1"
                            onChange={onChangeRecipientName}
                        />

                        <textarea
                            placeholder="Recipient address"
                            defaultValue={invoice.recipient.address}
                            className="form-control"
                            onChange={onChangeRecipientAddress}
                        />
                    </div>

                    <a href="#" onClick={onClickSave} className="btn btn-primary btn-sm">
                        <i className="fa-solid fa-cloud"></i> Save
                    </a>

                    &nbsp;

                    <a href="#" onClick={onClickCancel} className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-times"></i> Cancel
                    </a>
                </>
            )}
            
            {!isEditing && (
                <>
                    <div className="mb-1">
                        <strong>Billing to:</strong><br />
                        {invoice.recipient.name}<br />
                        {invoice.recipient.address}
                    </div>

                    <a href="#" onClick={onClickEdit} className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-pencil"></i> Edit billing info
                    </a>
                </>
            )}
        </div>
    );
}
 
export default BillingInfo;