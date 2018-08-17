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
									"payment_date": "26/07/18 12:41:10",
									"adjusted_amt": "3450.00",
									"collectedBy": "",
									"origin": "DD2",
									"payment_mode": "Adjustment",
									"record_date": "26/07/18 12:41:10",
									"payment_id": "",
									"transaction_number": "BDSP/00001007/17"
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


	var resultData = {
		"invoiceDate": [],
		"invoiceAmount": [],
		"invoiceType": [],
		"invoiceNumber": [],
		"dueDate": [],
		"invoiceStatus": [],
		"pendingInvoiceAmount": [],
		"paymentDetails": {
			"paymentDate": [],
			"adjustedAmount": [],
			"collectedBy": [],
			"origin": [],
			"paymentMode": [],
			"recordDate": [],
			"paymentId": [],
			"transactionNumber": []
		}
	}
	// sheet.getColumn(1).values = ['Invoice Date','Invoice Amount','Invoice Type','Invoice Number','Due Date', 'Invoice Status', 'Payment Invoice Amount', 'Payment Date'];
	resultData.invoiceDate.push('Invoice Date');
	resultData.invoiceAmount.push('Invoice Amount');
	resultData.invoiceType.push('Invoice Type');
	resultData.invoiceNumber.push('Invoice Number');
	resultData.dueDate.push('Due Date');
	resultData.invoiceStatus.push('Invoice Status');
	resultData.pendingInvoiceAmount.push('Payment Invoice Amount');
	resultData.paymentDetails.paymentDate.push('Payment Date')
	resultData.paymentDetails.adjustedAmount.push('Adjusted Amount')
	resultData.paymentDetails.collectedBy.push('Collected By')
	resultData.paymentDetails.origin.push('Origin')
	resultData.paymentDetails.paymentMode.push('Payment Mode')
	resultData.paymentDetails.recordDate.push('Record Date')
	resultData.paymentDetails.paymentId.push('Payment ID')
	resultData.paymentDetails.transactionNumber.push('Transaction Number')


	resultData.invoiceDate.push('');
	resultData.invoiceAmount.push('');
	resultData.invoiceType.push('');
	resultData.invoiceNumber.push('');
	resultData.dueDate.push('');
	resultData.invoiceStatus.push('');
	resultData.pendingInvoiceAmount.push('');
	resultData.paymentDetails.paymentDate.push('')
	resultData.paymentDetails.adjustedAmount.push('')
	resultData.paymentDetails.collectedBy.push('')
	resultData.paymentDetails.origin.push('')
	resultData.paymentDetails.paymentMode.push('')
	resultData.paymentDetails.recordDate.push('')
	resultData.paymentDetails.paymentId.push('')
	resultData.paymentDetails.transactionNumber.push('')



	var fromKey = 0;
	var toKey = 0;

	data.response.body.financial_transaction_details.financial_transaction_detail.forEach(function (obj, key) {


		if (obj.payment_details) {
			sheet.getRow(fromKey + 3).alignment = { vertical: 'middle', horizontal: 'center' };
			sheet.mergeCells('A' + (fromKey + 3) + ':A' + (toKey + 2));
			sheet.mergeCells('B' + (fromKey + 3) + ':B' + (toKey + 2));
			sheet.mergeCells('C' + (fromKey + 3) + ':C' + (toKey + 2));
			sheet.mergeCells('D' + (fromKey + 3) + ':D' + (toKey + 2));
			sheet.mergeCells('E' + (fromKey + 3) + ':E' + (toKey + 2));
			sheet.mergeCells('F' + (fromKey + 3) + ':F' + (toKey + 2));
			sheet.mergeCells('G' + (fromKey + 3) + ':G' + (toKey + 2));


			obj.payment_details.forEach(function (payments, keys) {
				toKey++
				if (keys !== obj.payment_details.length - 1) {
					resultData.invoiceDate.push('');
					resultData.invoiceAmount.push('');
					resultData.invoiceType.push('');
					resultData.invoiceNumber.push('');
					resultData.dueDate.push('');
					resultData.invoiceStatus.push('');
					resultData.pendingInvoiceAmount.push('');
				} else {
					resultData.invoiceDate.push(obj.invoiceDate);
					resultData.invoiceAmount.push(obj.invoiceAmount);
					resultData.invoiceType.push(obj.invoiceType);
					resultData.invoiceNumber.push(obj.invoiceNumber);
					resultData.dueDate.push(obj.due_Date);
					resultData.invoiceStatus.push(obj.invoiceStatus);
					resultData.pendingInvoiceAmount.push(obj.pendingInvoiceAmount);
				}
				resultData.paymentDetails.paymentDate.push(payments.payment_date)
				resultData.paymentDetails.adjustedAmount.push(payments.adjusted_amt)
				resultData.paymentDetails.collectedBy.push(payments.collectedBy)
				resultData.paymentDetails.origin.push(payments.origin)
				resultData.paymentDetails.paymentMode.push(payments.payment_mode)
				resultData.paymentDetails.recordDate.push(payments.record_date)
				resultData.paymentDetails.paymentId.push(payments.payment_id)
				resultData.paymentDetails.transactionNumber.push(payments.transaction_number)
			})
			fromKey = toKey;

		} else {
			fromKey++;
			toKey++
			resultData.invoiceDate.push(obj.invoiceDate);
			resultData.invoiceAmount.push(obj.invoiceAmount);
			resultData.invoiceType.push(obj.invoiceType);
			resultData.invoiceNumber.push(obj.invoiceNumber);
			resultData.dueDate.push(obj.due_Date);
			resultData.invoiceStatus.push(obj.invoiceStatus);
			resultData.pendingInvoiceAmount.push(obj.pendingInvoiceAmount);

			resultData.paymentDetails.paymentDate.push('')
			resultData.paymentDetails.adjustedAmount.push('')
			resultData.paymentDetails.collectedBy.push('')
			resultData.paymentDetails.origin.push('')
			resultData.paymentDetails.paymentMode.push('')
			resultData.paymentDetails.recordDate.push('')
			resultData.paymentDetails.paymentId.push('')
			resultData.paymentDetails.transactionNumber.push('')
		}
	})
	console.log(JSON.stringify(resultData));

	sheet.getColumn(1).values = resultData.invoiceDate;
	sheet.getColumn(2).values = resultData.invoiceAmount;
	sheet.getColumn(3).values = resultData.invoiceType;
	sheet.getColumn(4).values = resultData.invoiceNumber;
	sheet.getColumn(5).values = resultData.dueDate;
	sheet.getColumn(6).values = resultData.invoiceStatus;
	sheet.getColumn(7).values = resultData.pendingInvoiceAmount;
	sheet.getColumn(8).values = resultData.paymentDetails.paymentDate;

	res.setHeader('Content-Type', 'application/vnd.openxmlformats');
	res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
	workbook.xlsx.write(res)
		.then(function () {
			res.end();
		});
})
