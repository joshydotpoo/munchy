class MealPlannerObject {
  constructor(id, db) {
    this.id = id;
    this.meals = new Array();
    this.load();
    this.save();
  }
  getDay(day) {
    // return array of recipes for that day
    switch(day) {
      case "monday":
        return this.days[0];
      case "tuesday":
        return this.days[1];
      case "wednesday":
        return this.days[2];
      case "thursday":
        return this.days[3];
      case "friday":
        return this.days[4];
      case "saturday":
        return this.days[5];
      case "sunday":
        return this.days[6];
    }
    console.log("ERROR: incorrect day is entered in MealPlannerObject with username: " + this.username);
  }
  getBreakfastMeals(day) {
    return getDay(day)[0];
  }
  getLunchMeals(day) {
    return getDay(day)[1];
  }
  getDinnerMeals(day) {
    return getDay(day)[2];
  }

  addMeal(mealObj) {
    this.meals.push(mealObj);
    this.save();
  }

  load() {
    console.log("loading");
    var db = new Database();
    db.getUpdate();
    if(db.getValue(this.id) != -1) { // exists
      var jsonString = JSON.parse(db.getObject(this.id));
      console.log(jsonString);
      this.id = jsonString["id"];
      console.log("id: " + this.id);
      this.meals = new Array();
      console.log(jsonString["meals"]);
      for(var i = 0; i < jsonString["meals"].length; i++) {
        this.meals.push(MealObject.decode(jsonString.meals[i]));
      }
    }
  }

  save() {
    var db = new Database();
    db.getUpdate();
    if(db.getValue(this.id) != -1) {
      db.changeObjectValue(this.id, JSON.stringify(this));
      db.update();
    } else {
      db.insert(this.id, JSON.stringify(this));
    }
    db.update();
  }
}
class MealObject {
  constructor(name, day, type, prep) {
    this.name = name; // name of the recipe
    this.day  =  day; // monday -> sunday
    this.type = type; // breakfast/lunch/dinner
    this.prep = prep; // either EAT_OUT or COOK
    this.cost = -1;
    this.url = "";
  }
  setCost(cost) {
    this.cost = cost;
  }
  setURL(url) {
    this.url = url;
  }
  static decode(jsonString) {
    var meal = new MealObject(jsonString["name"], jsonString["day"], jsonString["type"], jsonString["prep"]);
    meal.setURL(jsonString["url"]);
    meal.setCost(jsonString["cost"]);
    return meal;
  }
}
