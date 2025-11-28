var wms_layers = [];
var format_LapakGIS_Batas_Kecamatan_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_0 = format_LapakGIS_Batas_Kecamatan_2024_0.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_0.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_0);var lyr_LapakGIS_Batas_Kecamatan_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_0, 
                style: style_LapakGIS_Batas_Kecamatan_2024_0,
    title: 'LapakGIS_Batas_Kecamatan_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_0.png" /> 0<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_1.png" /> 1<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_2.png" /> 2<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_3.png" /> <br />'
        });

lyr_LapakGIS_Batas_Kecamatan_2024_0.setVisible(true);
var layersList = [lyr_LapakGIS_Batas_Kecamatan_2024_0];
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'SHP Gis_Jumlah penduduk': 'SHP Gis_Jumlah penduduk', 'SHP Gis_RS Umum': 'SHP Gis_RS Umum', 'SHP Gis_RS Khusus': 'SHP Gis_RS Khusus', 'SHP Gis_Puskemas Rawat Inap': 'SHP Gis_Puskemas Rawat Inap', 'SHP Gis_Puskesmas Non Rawat Inap': 'SHP Gis_Puskesmas Non Rawat Inap', 'SHP Gis_Klinik Pratama': 'SHP Gis_Klinik Pratama', 'SHP Gis_Posyandu': 'SHP Gis_Posyandu', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'SHP Gis_Jumlah penduduk': 'TextEdit', 'SHP Gis_RS Umum': 'TextEdit', 'SHP Gis_RS Khusus': 'TextEdit', 'SHP Gis_Puskemas Rawat Inap': 'TextEdit', 'SHP Gis_Puskesmas Non Rawat Inap': 'TextEdit', 'SHP Gis_Klinik Pratama': 'TextEdit', 'SHP Gis_Posyandu': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', 'SHP Gis_Jumlah penduduk': 'no label', 'SHP Gis_RS Umum': 'no label', 'SHP Gis_RS Khusus': 'no label', 'SHP Gis_Puskemas Rawat Inap': 'no label', 'SHP Gis_Puskesmas Non Rawat Inap': 'no label', 'SHP Gis_Klinik Pratama': 'no label', 'SHP Gis_Posyandu': 'no label', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});