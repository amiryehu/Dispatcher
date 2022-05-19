import React from "react";
import moment from "moment";

export const formattingDate = (date: string) => {
    const newDate = new Date(date);
    return moment(newDate).format("dddd MMM d, yyyy");
}

export const formattingDateToMonth = (date: string) => {
    const newDate = new Date(date);
    return moment(newDate).format("MMMM");
}


export const formattingDateToURL = (date: string) => {
    const newDate = new Date(date);
    return moment(newDate).format("YYYY-MM-DD");
}