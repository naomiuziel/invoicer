import { formatMoney } from "../../../services/string";

const LineItemRow = ({ lineItem, onRemoveLineItem }) => {
    const onClickRemove = e => {
        e.preventDefault();
        onRemoveLineItem(lineItem.uuid);
    };

    return (
        <tr>
            <td>
                {lineItem.item}
            </td>

            <td>
                {formatMoney(lineItem.unitPrice)}
            </td>

            <td>
                {lineItem.quantity}
            </td>

            <td>
                {formatMoney(lineItem.unitPrice * lineItem.quantity)}
            </td>
            
            <td className="text-end">
                <a href="#" className="btn btn-danger btn-sm" onClick={onClickRemove}>
                    <i className="fa-solid fa-times"></i>
                </a>
            </td>
        </tr>
    );
}
 
export default LineItemRow;