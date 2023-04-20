import { capitiliseFirstLetter } from "../../services/string";

const InvoiceStatusLabel = ({ invoice }) => {
    const classMap = {
        'PENDING': 'bg-warning text-dark',
        'PAID': 'bg-success',
        'OVERDUE': 'bg-danger',
    };

    return (
        <span className={`badge ${classMap[invoice.status]}`}>
            {capitiliseFirstLetter(invoice.status)}
        </span>
    );
}
 
export default InvoiceStatusLabel;