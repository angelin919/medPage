document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8] // координаты точки
      }
    });

    var myCircle = new ymaps.Circle([[55.76, 37.64], 10000]);

    var myPlacemark = new ymaps.Placemark([55.7555, 37.6118], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/Subtract.png',
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    /*myMap.geoObjects.add(myGeoObject);*/
    myMap.geoObjects.add(myPlacemark);
  }
})
