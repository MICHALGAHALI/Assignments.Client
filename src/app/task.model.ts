/**
 *  this is an object returned from the Task api
 */

export interface Task {
   id: number;
   title: string;//שם משימה
   completed: boolean
   type?: string//סוג משימה אישית/ עבודה /לימודים
   description?: string;//תיאור משימה
   startDate?: string;//התחלת משימה
   finishDate?: string;//תאריך סיום
   isRepeated?: boolean;//חוזרת /חד -פעמי תדירות
}