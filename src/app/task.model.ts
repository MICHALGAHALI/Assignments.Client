/**
 *  this is an object returned from the Task api
 */

 export interface Task {
  userId: number;
  id: number;
  title: string;//שם משימה
  completed:boolean
    // id:number//מזהה יחודי
     type?:string//סוג משימה אישית/ עבודה /לימודים
     description?:string;//תיאור משימה
     beginDate?:string;//התחלת משימה
     endDate?:string;//תאריך סיום
     frequency?:string;//חוזרת /חד -פעמי תדירות
  }