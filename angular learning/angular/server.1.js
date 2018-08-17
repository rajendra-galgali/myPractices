'use strict'
let express = require('express');
let morgan = require('morgan');
let app = express();

const port = 1992;
app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));

app.listen(port, function () {
	console.log("Server running on port :" + port);
});



var Excel = require('exceljs');

app.get('/download', function (req, res) {
	var data = {
		"response": {
			"body": {
				"financial_transaction_details": {
					"financial_transaction_detail": [
						{
							"invoiceDate": "30/06/18 11:59:59",
							"invoiceAmount": "47640.00",
							"invoiceType": "Invoice",
							"invoiceNumber": "FINV12647252-1806A",
							"due_Date": "12/07/18 12:00:00",
							"invoiceStatus": "Unpaid",
							"payment_details": [
								{
									"payment_date": "25/07/18 01:45:18",
									"adjusted_amt": "22500.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "25/07/18 01:45:18",
									"payment_id": "",
									"transaction_number": "BDSP/00001006/17"
								},
								{
									"payment_date": "26/07/18 12:41:10",
									"adjusted_amt": "3450.00",
									"collectedBy": "",
									"origin": "DD2",
									"payment_mode": "Adjustment",
									"record_date": "26/07/18 12:41:10",
									"payment_id": "",
									"transaction_number": "BDSP/00001007/17"
								},
								{
									"payment_date": "26/07/18 12:41:11",
									"adjusted_amt": "3450.00",
									"collectedBy": "",
									"origin": "DD2",
									"payment_mode": "Adjustment",
									"record_date": "26/07/18 12:41:11",
									"payment_id": "",
									"transaction_number": "BDSP/00001008/17"
								},
								{
									"payment_date": "26/07/18 02:17:23",
									"adjusted_amt": "345.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "26/07/18 02:17:23",
									"payment_id": "",
									"transaction_number": "BDSP/00001009/17"
								},
								{
									"payment_date": "26/07/18 05:00:16",
									"adjusted_amt": "2300.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "26/07/18 05:00:16",
									"payment_id": "",
									"transaction_number": "BDSP/00001010/17"
								},
								{
									"payment_date": "27/07/18 10:57:42",
									"adjusted_amt": "115.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "27/07/18 10:57:42",
									"payment_id": "",
									"transaction_number": "BDSP/00001011/17"
								}
							],
							"pendingInvoiceAmount": "47640.00"
						},
						{
							"invoiceDate": "31/05/18 11:59:59",
							"invoiceAmount": "60020.00",
							"invoiceType": "Invoice",
							"invoiceNumber": "FINV12647251-1805A",
							"due_Date": "12/06/18 12:00:00",
							"invoiceStatus": "Partial",
							"pendingInvoiceAmount": "27860.00",
							"payment_details": [
								{
									"payment_date": "25/07/18 01:45:18",
									"adjusted_amt": "22500.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "25/07/18 01:45:18",
									"payment_id": "",
									"transaction_number": "BDSP/00001006/17"
								},
								{
									"payment_date": "25/07/18 01:45:18",
									"adjusted_amt": "22500.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "25/07/18 01:45:18",
									"payment_id": "",
									"transaction_number": "BDSP/00001006/17"
								}
							]
						},
						{
							"invoiceDate": "30/04/18 11:59:59",
							"invoiceAmount": "45530.00",
							"invoiceType": "Invoice",
							"invoiceNumber": "FINV12639059-1804A",
							"due_Date": "13/05/18 12:00:00",
							"invoiceStatus": "Unpaid",
							"pendingInvoiceAmount": "45530.00",
							"payment_details": [
								{
									"payment_date": "25/07/18 01:45:18",
									"adjusted_amt": "22500.00",
									"collectedBy": "",
									"origin": "WAREHOUSE",
									"payment_mode": "Adjustment",
									"record_date": "25/07/18 01:45:18",
									"payment_id": "",
									"transaction_number": "BDSP/00001006/17"
								}
							]
						}
					]
				}
			}
		}
	}

	var workbook = new Excel.Workbook();
	var sheet = workbook.addWorksheet('Invoice Details');
	
	sheet.addRow(['Invoice Date', 'Invoice Amount', 'Invoice Type', 'Invoice Number', 'Due Date', 'Invoice Status', 'Payment Invoice Amount',
		'Payment Date', 'Adjusted Amount', 'Collected By', 'Origin', 'Payment Mode', 'Record Date', 'Payment ID', 'Transaction Number']);
	sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
	sheet.addRow(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '	']);
	//sheet.mergeCells('A2:P2');

	var fromKey = 0;
	var toKey = 0;

	data.response.body.financial_transaction_details.financial_transaction_detail.forEach(function (obj, key) {
		if (obj.payment_details) {
			obj.payment_details.forEach(function (payments, k) {
				toKey++
				sheet.addRow([obj.invoiceDate, obj.invoiceAmount, obj.invoiceType, obj.invoiceNumber, obj.due_Date, obj.invoiceStatus, obj.pendingInvoiceAmount,
				payments.payment_date, payments.adjusted_amt, payments.collectedBy, payments.origin, payments.payment_mode, payments.record_date, payments.payment_id, payments.transaction_number]);
			})
			sheet.getRow(fromKey + 3).alignment = { vertical: 'middle', horizontal: 'center' };
			sheet.mergeCells('A' + (fromKey + 3) + ':A' + (toKey + 2));
			sheet.mergeCells('B' + (fromKey + 3) + ':B' + (toKey + 2));
			sheet.mergeCells('C' + (fromKey + 3) + ':C' + (toKey + 2));
			sheet.mergeCells('D' + (fromKey + 3) + ':D' + (toKey + 2));
			sheet.mergeCells('E' + (fromKey + 3) + ':E' + (toKey + 2));
			sheet.mergeCells('F' + (fromKey + 3) + ':F' + (toKey + 2));
			sheet.mergeCells('G' + (fromKey + 3) + ':G' + (toKey + 2));
			fromKey = toKey;
		} else {
			fromKey++;
			toKey++
			sheet.addRow([obj.invoiceDate, obj.invoiceAmount, obj.invoiceType, obj.invoiceNumber, obj.due_Date, obj.invoiceStatus, obj.pendingInvoiceAmount]);
		}
	})


	res.setHeader('Content-Type', 'application/vnd.openxmlformats');
	res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
	workbook.xlsx.write(res)
		.then(function () {
			res.end();
		});
})
