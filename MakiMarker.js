/**
 * Example class showing how to implement new MarkerClasses
 * uses the glyphicons given by bootstrap
 */
L.StyleEditor.marker.MakiMarker = L.StyleEditor.marker.Marker.extend({

    createMarkerIcon: function (iconOptions) {
        var size = iconOptions.iconSize;
        var icon = iconOptions.icon;
        var color = iconOptions.iconColor;

        var icon_url = 'url(http://fupduck.github.io/MakiMarker/icons/'+ icon +'-15.svg);';
        return new L.divIcon({
            className: 'leaflet-styleeditor-makimarker-marker',
            html: '<div class="leaflet-styleeditor-makimarker-marker-wrapper" style="background-color: ' + color +';"></div>' +
                  '<div class="leaflet-styleeditor-makimarker-marker-icon" style="mask-image: '+ icon_url + ' -webkit-mask-image: ' + icon_url +'"></div>',
            icon: icon,
            iconUrl: 'icons/' + icon + '-15.svg',
            iconColor: color,
            iconSize: size,
            iconAnchor: [size[0] / 2, size[1]],
            popupAnchor: [0, 0]
        });
    },

	setStyle: function(styleOption, value) {
		if (styleOption !== 'icon') {
			styleOption = 'icon' + styleOption.charAt(0).toUpperCase() + styleOption.slice(1);
		}

		var iconOptions = this.options.iconOptions;
        if(iconOptions[styleOption] !== value) {
            iconOptions[styleOption] = value;
            this.setNewMarker();
        }
	},

    createSelectHTML: function (parentUiElement, iconOptions, icon) {
        var tmpOptions = {};
        tmpOptions.iconSize = this.options.size.small;
        tmpOptions.icon = icon;
        tmpOptions.iconColor = iconOptions.iconColor;

        parentUiElement.innerHTML = this.createMarkerIcon(tmpOptions).createIcon().outerHTML;
    },

    _backgroundPosition: function(color, icon, size) {
        color = this.options.styleEditorOptions.util.rgbToHex(color);
        size = this.sizeToPixel(size);

        var row = this.options.colorRamp.indexOf(color);
        var colorIcons = this.options.markers[color];
        if (typeof colorIcons === 'undefined') {
            colorIcons = this.options.markers.default;
        }
        var col = colorIcons.indexOf(icon);
        return L.point(col*size[0], row*size[1]);
    },

    options: {
        size: {
            'small': [30, 30],
            'medium': [40, 40],
            'large': [50, 50]
        },

        markers: {
        	'default': [
        	    'aerialway',
                'airfield',
                'airport',
                'alcohol-shop',
                'america-football',
                'amusement-park',
                'aquarium',
                'art-gallery',
                'attraction',
                'bakery',
                'bank',
                'bar',
                'barrier',
                'baseball',
                'basketball',
                'bbq',
                'beer',
                'bicycle',
                'bicycle-share',
                'blood-bank',
                'buddhism',
                'building',
                'building-alt1',
                'bus',
                'cafe',
                'campsite',
                'car',
                'castle',
                'cemetery',
                'cinema',
                'circle',
                'circle-stroked',
                'city',
                'clothing-store',
                'college',
                'commercial',
                'cricket',
                'cross',
                'dam',
                'danger',
                'defibrillator',
                'dentist',
                'doctor',
                'dog-park',
                'drinking-water',
                'embassy',
                'emergency-phone',
                'entrance',
                'entrance-alt1',
                'farm',
                'fast-food',
                'fence',
                'ferry',
                'fire-station',
                'florist',
                'fuel',
                'gaming',
                'garden',
                'garden-center',
                'gift',
                'golf',
                'grocery',
                'hairdresser',
                'harbor',
                'heart',
                'heliport',
                'home',
                'horse-riding',
                'hospital',
                'ice-cream',
                'industry',
                'information',
                'karaoke',
                'landmark',
                'landuse',
                'laundry',
                'library',
                'lighthouse',
                'lodging',
                'logging',
                'marker',
                'marker-stroked',
                'mobile-phone',
                'monument',
                'mountain',
                'museum',
                'music',
                'natural',
                'park',
                'park-alt1',
                'parking',
                'parking-garage',
                'pharmacy',
                'picnic-site',
                'pitch',
                'place-of-worship',
                'playground',
                'police',
                'post',
                'prison',
                'rail',
                'rail-light',
                'rail-metro',
                'ranger-station',
                'recycling',
                'religious-christian',
                'religious-jewish',
                'religious-muslim',
                'residential-community',
                'restaurant',
                'roadblock',
                'rocket',
                'school',
                'scooter',
                'shelter',
                'shop',
                'skiing',
                'slaughterhouse',
                'snowmobile',
                'soccer',
                'square',
                'square-stroked',
                'stadium',
                'star',
                'star-stroked',
                'suitcase',
                'sushi',
                'swimming',
                'teahouse',
                'telephone',
                'tennis',
                'theatre',
                'toilet',
                'town',
                'town-hall',
                'triangle',
                'triangle-stroked',
                'veterinary',
                'village',
                'volcano',
                'warehouse',
                'waste-basket',
                'water',
                'wetland',
                'wheelchair',
                'zoo'
            ]
        }
    }

});