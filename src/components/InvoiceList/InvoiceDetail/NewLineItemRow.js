import { formatMoney } from "../../../services/string";

const NewLineItemRow = ({ lineItem, onChangeRow, onRemoveRow, onSaveRow }) => {
    const onChangeValue = (key, value) => {
        const newLineItem = { ...lineItem };
        newLineItem[key] = value;
        onChangeRow(newLineItem);
    };

    const onClickRemove = e => {
        e.preventDefault();
        onRemoveRow();
    }

    const onClickSave = e => {
        e.preventDefault();
        onSaveRow();
    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Logo design"
                    defaultValue={lineItem.item}
                    onChange={e => {
                        onChangeValue('item', e.target.value);
                    }}
                />
            </td>

            <td>
                <input
                    type="number"
                    className="form-control"
                    placeholder="100"
                    defaultValue={lineItem.unitPrice}
                    onChange={e => {
                        onChangeValue('unitPrice', parseInt(e.target.value));
                    }}
                />
            </td>

            <td>
                <input
                    type="number"
                    className="form-control"
                    placeholder="1"
                    defaultValue={lineItem.quantity}
                    onChange={e => {
                        onChangeValue('quantity', parseInt(e.target.value));
                    }}
                />
            </td>

            <td>
                {formatMoney(lineItem.unitPrice * lineItem.quantity)}
            </td>

            <td className="text-end">
                <a href="#" className="btn btn-success btn-sm" onClick={onClickSave}>
                    <i className="fa-solid fa-check"></i>
                </a>

                &nbsp;

                <a href="#" className="btn btn-danger btn-sm" onClick={onClickRemove}>
                    <i className="fa-solid fa-times"></i>
                </a>
            </td>
        </tr>
    );
}
 
export default NewLineItemRow;