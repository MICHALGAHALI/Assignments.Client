/**
 *  this is an object returned from the Task api
 */

import { TypeTask } from "./type-task.medel";

export interface Task {
   id: number;
   title: string;//שם משימה
   completed?: boolean;
   type?: TypeTask//סוג משימה אישית/ עבודה /לימודים
   description?: string;//תיאור משימה
   rangeDates: {
      startDate?: string;//התחלת משימה
      finishDate?: string;//תאריך סיום
   }
   isRepeated?: boolean;//חוזרת /חד -פעמי תדירות
}