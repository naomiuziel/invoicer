export const calculateInvoiceSubtotal = invoice => {
    return invoice.lineItems.reduce((accumulator, lineItem) => {
        return accumulator + (lineItem.unitPrice * lineItem.quantity);
    }, 0);
};

export const calculateInvoiceTotal = invoice => {
    const subtotal = calculateInvoiceSubtotal(invoice);

    return subtotal + (subtotal * (invoice.taxPercentage / 100));
};