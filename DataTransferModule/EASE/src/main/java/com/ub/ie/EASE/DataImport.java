/* References:
 * 1 - https://medium.com/@ssaurel/reading-microsoft-excel-xlsx-files-in-java-2172f5aaccbe
 * 2 - https://examples.javacodegeeks.com/software-development/mongodb/java-mongodb-insert-a-document-example/
 */
package com.ub.ie.EASE;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class DataImport {
	
	private final static String FILE_NAME = "C:\\Users\\Linus-PC\\Downloads\\Compilation 4.01.xlsx";
	
	public static void main(String ...arg) throws IOException{
		File inputExcel = new File(FILE_NAME); 
		FileInputStream inputExcel_fis = new FileInputStream(inputExcel);
		
		
		XSSFWorkbook workbook = new XSSFWorkbook(inputExcel_fis);
//		System.out.println(workbook.getSheetName(1));
		XSSFSheet sheet = workbook.getSheetAt(1);    // Product_Master Sheet
//		System.out.println(sheet.getFirstRowNum());
//		System.out.println(sheet.getLastRowNum());
//		System.out.println(sheet.getRow(1).getFirstCellNum());
//		System.out.println(sheet.getRow(1).getLastCellNum());
		
		System.out.println("Workbook opened");
		System.out.println("Reading rows and creating documents");
		List<Document> documents = new ArrayList<Document>();
		for(int i=1; i<=sheet.getLastRowNum(); i++) {    // 'i' starts from 1 to skip header row
			Row row = sheet.getRow(i);
			
			int assetID = (int)(Float.parseFloat(row.getCell(0).toString()));
			String company = row.getCell(1).toString();
			String description = (row.getCell(2) == null)? "" : row.getCell(2).toString();
			String fileType = row.getCell(3).toString();
			String productName = (row.getCell(4) == null)? "" : row.getCell(4).toString();
			
			Document doc = new Document();
			doc.put("assetID", assetID);
			doc.put("company", company);
			doc.put("description", description);
			doc.put("fileType", fileType);
			doc.put("productName", productName);
			
			documents.add(doc);
			
//			System.out.println(assetID + " , " + company + " , " + description + " , " + fileType + " , " + productName);
		}
		
		System.out.println("Opened connection to MongoDB instance");
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		MongoDatabase db = mongoClient.getDatabase("ease");
		MongoCollection<Document> mongoCollection = db.getCollection("product_master");
		
		mongoCollection.insertMany(documents);
		System.out.println("Inserted " + documents.size() + " documents into product_master collection");
		
		mongoClient.close();
		System.out.println("Completed!");
	}

}
