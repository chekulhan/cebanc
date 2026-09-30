
function doGet() {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('Sales Dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/**
 * Reads the sales sheet and returns the data
 * in a format that JavaScript can use.
 */
function getSalesData() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('sales');

  if (!sheet) {
    throw new Error('No existe una hoja llamada "sales".');
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0].map(h => String(h).trim());

  const required = [
    'order_id',
    'order_date',
    'city',
    'product',
    'channel',
    'quantity',
    'amount_eur'
  ];

  required.forEach(column => {
    if (!headers.includes(column)) {
      throw new Error(`Falta la columna: ${column}`);
    }
  });

  const index = {};

  headers.forEach((header, i) => {
    index[header] = i;
  });

  return values
    .slice(1)
    .filter(row => row[index.order_id] !== '')
    .map(row => {

      let date = row[index.order_date];

      // Google Sheets may return a Date object
      if (date instanceof Date) {
        date = Utilities.formatDate(
          date,
          Session.getScriptTimeZone(),
          'yyyy-MM-dd'
        );
      }

      return {
        order_id: String(row[index.order_id]),
        order_date: String(date),
        city: String(row[index.city] || ''),
        product: String(row[index.product] || ''),
        channel: String(row[index.channel] || ''),
        quantity: Number(row[index.quantity]) || 0,
        amount_eur: Number(row[index.amount_eur]) || 0,
        activo: row[index.activo] || ''
      };
    });
}
