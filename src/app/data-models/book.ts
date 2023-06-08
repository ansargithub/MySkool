export class Book {
    bookCode: string;
    bookId: number;
    title: string;
    size: string;
    author: string;
    color: string;
    dated: Date;
    isbNo: string;
    userId: number;
    lmd: Date;
    lmu: Date;
    status: string;
    purchaseId: number;
    salesOrderId: number;
    soldStatus: string;
    barcode: string;
  
    constructor() {
      this.bookCode = '';
      this.bookId = 0;
      this.title = '';
      this.size = '';
      this.author = '';
      this.color = '';
      this.dated = new Date();
      this.isbNo = '';
      this.userId = 0;
      this.lmd = new Date();
      this.lmu = new Date();
      this.status = '';
      this.purchaseId = 0;
      this.salesOrderId = 0;
      this.soldStatus = '';
      this.barcode = '';
    }
  }
  