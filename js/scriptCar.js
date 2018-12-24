 var car = {
  brand: 'BMV',
  year: '2017',
  color: 'black',
  mileage: '1',
  ignition: false,
  amountPetrol: 7,

  isIgnition: function() {
    this.ignition = true;
  },

  start: function() {
    if (this.ignition) {
      console.log('Машина ' + this.brand + ' цвета - ' + this.color + ' поехала');
    } else {
      console.log('Включите вначале зажигание');
    }
  },

  stop: function() {
    if (this.ignition) {
      this.ignition = false;
      console.log('Машинка остановилась');
    } else {
      console.log('Зажигание и так выключено');
    }
  },

  isPetrol: function() {
    if (this.amountPetrol > 0) {
      console.log(this.ignition);
    } else {
      console.log('Нужно заправить автомобиль');
    }
  },

  toTankUpCar: function() {
    this.amountPetrol = 10;
    console.log('Машинка заправилась');
  }
};
 
 car.isIgnition();
 car.start();
 car.stop();
 car.isPetrol();
 
