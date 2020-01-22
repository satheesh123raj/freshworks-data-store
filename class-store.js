"use strict";

const fs = require("fs");
const uuid = require("uuid");

const filePath = "./store.json";

class Store {
  constructor() {}

  static get() {
    let data = fs.readFileSync(filePath, "utf8");
    data = data != "" ? JSON.parse(data) : [];
    return data.length
      ? data.filter(item => {
          if (item.value.expiresIn != undefined) {
            let remain = new Date().valueOf() - item.createdAt;
            console.log(remain / 1000);
            if (remain / 1000 < item.value.expiresIn) return item;
          } else return item;
        })
      : [];
  }

  static create(data) {
    let dbData = this.get();
    let key = uuid();
    key = key.replace(/-/g, "");
    let newData = { key: key, value: data, createdAt: new Date().valueOf() };
    dbData.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(dbData));
    return newData;
  }

  static getByKey(key) {
    let dbData = this.get();
    let result = dbData.filter(item => item.key == key);
    return result[0] != undefined ? result[0] : {};
  }

  static update(key, data) {
    let dbData = this.get();
    let newData = dbData.map(item => {
      if (item.key == key) {
        item.value = data;
      }
      return item;
    });
    fs.writeFileSync(filePath, JSON.stringify(newData));
    return this.getByKey(key);
  }

  static delete(key) {
    let dbData = this.get();
    let newData = dbData.filter(item => item.key != key);
    fs.writeFileSync(filePath, JSON.stringify(newData));
    return {};
  }
}

module.exports = Store;
