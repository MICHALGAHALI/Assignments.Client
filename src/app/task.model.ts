/**
 *  this is an object returned from the Task api
 */

 export interface Task {
    id:number//מזהה יחודי
    type:string//סוג משימה אישית/ עבודה /לימודים
    name:string;//שם משימה
    description:string;//תיאור משימה
    beginDate:string;//התחלת משימה
    endDate:string;//תאריך סיום
    frequency:string;//חוזרת /חד -פעמי תדירות
    isDone:boolean;//האם בוצע •	Checkbox 
  }