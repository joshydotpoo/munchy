class Map {
  constructor() {
    this.keys = new Array();
    this.values = new Array();
  }

  addData(key, value) {
    var keyIndex = this.keys.indexOf(key);
    if(keyIndex == -1) { // field doesn't exist
      this.keys.push(key);
      this.values.push(new Array());
      keyIndex = this.keys.length - 1;
    }
    this.values[keyIndex].push(value);
  }

  getValue(key) {
    var keyIndex = this.keys.indexOf(key);
    if(keyIndex == -1)
      return -1;
    else
      return this.values[keyIndex];
  }

  getKeyIndex(key) {
    return this.keys.indexOf(key);
  }
}
class Database {
  constructor() {
    this.map = new Map();
    this.getUpdate();
  }

  toString() {
    return JSON.stringify(this.map);
  }

  getUpdate() {
    if(localStorage.getItem("database") === null) {
      this.update();
    } else {
      var str = JSON.parse(localStorage.getItem("database"));
      this.map = new Map();
      var i = 0;
      for(i; i < str.keys.length; i++) {
        var key = str.keys[i];
        var data = str.values[i];
        var j = 0;
        for(j; j < data.length; j++)
          this.map.addData(key, data[j]);
      }
    }
  }

  update() {
    localStorage.setItem("database", this.toString());
  }

  insert(key, value) {
    this.map.addData(key, value);
    this.update();
  }

  getValue(key) {
    return this.map.getValue(key);
  }

  getObject(key) {
    return this.map.getValue(key)[0];
  }

  changeValue(key, initVal, newVal) {
    var valIndex = this.map.getValue(key, initVal).indexOf(initVal);
    this.map.getValue[valIndex] = newVal;
    this.update();
  }

  changeObjectValue(key, newVal) {
    this.map.values[this.map.getKeyIndex(key)][0] = newVal;
  }

  clear() {
    this.map = new Map();
    this.update();
  }
}
class User {
  constructor(username, database) {
    this.username = username;
    this.password = "";
    this.bookmarks = new Array();
    this.database = database;
    this.getUpdate();
    this.update();
  }
  setUsername(username) {this.username = username; this.update();}
  setPassword(password) {this.password; this.update();}
  addBookmark(title) {this.bookmarks.push(title); this.update();}
  removeBookmark(title) {
    var bm = new Array();
    for(var i = 0; i < this.bookmarks.length; i++) {
      if(this.bookmarks[i] != title)
        bm.push(this.bookmarks[i]);
    }
    this.bookmarks = bm;
    this.update();
  }
  isBookmarked(title) {
    var index = this.bookmarks.indexOf(title);
    return (index != -1);
  }
  toString() {
    return JSON.stringify(this);
  }
  getUpdate() {
    var db = this.database;
    db.getUpdate();
    if(db.getValue(this.username) != -1) { // exists
      var jsonString = JSON.parse(db.getObject(this.username));
      console.log(jsonString);
      this.username = jsonString["username"];
      this.bookmarks = new Array();
      for(var i = 0; i < jsonString["bookmarks"].length; i++)
        this.bookmarks.push(jsonString.bookmarks[i]);
    }
  }
  update() {
    var db = this.database;
    if(db.getValue(this.username) != -1) {
      db.changeObjectValue(this.username, this.toString());
      db.update();
    } else {
      db.insert(this.username, this.toString());
    }
  }
}

function getUser() {
  if(localStorage.getItem("username") != -1)
    return new User(localStorage.getItem("username"), new Database());
  else {
    return null;
  }
}

/*

Database db = ... ;
MealPlannerObject mealPlanner = new MealPlannerObject(username);
// breakfast
for each meal
  MealObject meal = new MealObject(...);
  mealPlanner.addMeal(meal, day);
// lunch ...
// dinner ...
db.insert(key, mealPlanner.toString());


mealPlanner = db.getObject("meal planner");
monday = mealPlanner.getDay("monday");
monday.getBreakfastMeals()

*/
