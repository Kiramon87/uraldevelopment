let center = [56.62485821108298,62.0924950605701];
let center2 = [57.02654668619766,59.55653338098136];
let center3 = [56.372487774718664,60.103481500000015];
let center4 = [56.94156686419174,60.34703299999996];
let center5 = [56.49311310530685,60.72772820734017];
let center6 = [57.3962252782612,60.45940389934979];
let center7 = [57.489956646644835,60.22325030368536];
let center8 = [56.59669405813647,61.25330832281486];
let center9 = [56.4052792932854,61.87332918656582];
let center10 = [56.433401922964514,61.603755782862386];

function init() {
	let map = new ymaps.Map('map-test', {
		center: [56.84457926005242,60.60326356607156],
		zoom: 8
	});

	let placemark1 = new ymaps.Placemark(center, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Уральский Марс</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto7.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark2 = new ymaps.Placemark(center2, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Село Слобода</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto1.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark3 = new ymaps.Placemark(center3, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Водопад Каменные Губы</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto2.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark4 = new ymaps.Placemark(center4, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Чертово Городище</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto3.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

	let placemark5 = new ymaps.Placemark(center5, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Тальков Камень</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto4.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark6 = new ymaps.Placemark(center6, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Село Кунара и пряничный
                дом кузнеца Кириллова</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto5.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark7 = new ymaps.Placemark(center7, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Невьянская наклонная башня и парк Демидовых</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto6.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark8 = new ymaps.Placemark(center8, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Гилёвские водопады</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto8.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark9 = new ymaps.Placemark(center9, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Каменные Ворота</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto9.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);

    let placemark10 = new ymaps.Placemark(center10, {
		balloonContent: `

			<div class="balloon">
				<div class="balloon__address">Порог Ревун</div>
				<div class="balloon__contacts">
					<a href="http://127.0.0.1:5501/html/mesto10.html">Информация о достопримечательности</a>
				</div>
			</div>

		`
	},);



  map.controls.remove('rulerControl'); // удаляем контрол правил


	// map.geoObjects.add(placemark);
	map.geoObjects.add(placemark1 );
    map.geoObjects.add(placemark2 );
    map.geoObjects.add(placemark3 );
    map.geoObjects.add(placemark4 );
    map.geoObjects.add(placemark5 );
    map.geoObjects.add(placemark6 );
    map.geoObjects.add(placemark7 );
    map.geoObjects.add(placemark8 );
    map.geoObjects.add(placemark9 );
    map.geoObjects.add(placemark10 );

	placemark1.balloon.open();
    placemark2.balloon.open();
    placemark3.balloon.open();
    placemark4.balloon.open();
    placemark5.balloon.open();
    placemark6.balloon.open();
    placemark7.balloon.open();
    placemark8.balloon.open();
    placemark9.balloon.open();
    placemark10.balloon.open();
}

ymaps.ready(init);