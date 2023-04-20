import { formatMoney } from "../../../services/string";
import { calculateInvoiceTotal, calculateInvoiceSubtotal } from "../../../services/invoices";

const TotalsTable = ({ invoice }) => {
    return (
        <table className="table totals-table">
            <tbody>
                <tr>
                    <td><strong>Subtotal</strong></td>

                    <td className="text-end">
                        {formatMoney(calculateInvoiceSubtotal(invoice))}
                    </td>
                </tr>

                <tr>
                    <td><strong>Tax</strong></td>

                    <td className="text-end">
                        {invoice.taxPercentage}%
                    </td>
                </tr>

                <tr>
                    <td><strong>Total</strong></td>

                    <td className="text-end">
                        {formatMoney(calculateInvoiceTotal(invoice))}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default TotalsTable;