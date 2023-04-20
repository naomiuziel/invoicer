import { useState } from "react";
import LineItemRow from "./LineItemRow";
import NewLineItemRow from "./NewLineItemRow";
import { v4 as uuidv4 } from 'uuid';


const LineItemsTable = ({ lineItems, onAddLineItem, onRemoveLineItem }) => {
    const [unsavedRows, setUnsavedRows] = useState([]);

    const onClickAdd = e => {
        e.preventDefault();

        setUnsavedRows([
            ...unsavedRows,
            {
                uuid: uuidv4(),
                item: undefined,
                unitPrice: 0,
                quantity: 1
            }
        ]);
    };

    const onChangeUnsavedRow = (uuidToChange, changedRow) => {
        setUnsavedRows(unsavedRows.map((unsavedRow) => {
            return unsavedRow.uuid == uuidToChange ? changedRow : unsavedRow;
        }));
    };

    const onRemoveUnsavedRow = uuidToRemove => {
        setUnsavedRows(unsavedRows.filter(unsavedRow => {
            return unsavedRow.uuid != uuidToRemove;
        }));
    };

    const onSaveUnsavedRow = unsavedRow => {
        if (!unsavedRow.quantity || !unsavedRow.unitPrice || !unsavedRow.item) {
            alert('Oops! Please enter values for all fields before saving.');
            return;
        }

        onAddLineItem(unsavedRow);
        onRemoveUnsavedRow(unsavedRow.uuid);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th width="100px">Price</th>
                    <th width="100px">Qty</th>
                    <th width="100px">Total</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {lineItems.map((lineItem, i) =>
                    <LineItemRow
                        key={`lineItem-${i}`}
                        lineItem={lineItem}
                        onRemoveLineItem={onRemoveLineItem}
                    />
                )}

                {unsavedRows.map(unsavedRow =>
                    <NewLineItemRow
                        key={`unsavedLineItem-${unsavedRow.uuid}`}
                        lineItem={unsavedRow}
                        onChangeRow={row => onChangeUnsavedRow(unsavedRow.uuid, row)}
                        onRemoveRow={() => onRemoveUnsavedRow(unsavedRow.uuid)}
                        onSaveRow={() => onSaveUnsavedRow(unsavedRow)}
                    />)}

                <tr>
                    <td colSpan={5} className="text-end border-none">
                        <a onClick={onClickAdd} href="#" className="btn btn-sm btn-secondary">
                            <i className="fa-regular fa-plus" /> Add line item
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default LineItemsTable;