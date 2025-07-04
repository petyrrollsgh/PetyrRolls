var wms_layers = [];

var format_WGS_Surface_Geology_500kMapUnitPolys_0 = new ol.format.GeoJSON();
var features_WGS_Surface_Geology_500kMapUnitPolys_0 = format_WGS_Surface_Geology_500kMapUnitPolys_0.readFeatures(json_WGS_Surface_Geology_500kMapUnitPolys_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WGS_Surface_Geology_500kMapUnitPolys_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WGS_Surface_Geology_500kMapUnitPolys_0.addFeatures(features_WGS_Surface_Geology_500kMapUnitPolys_0);
var lyr_WGS_Surface_Geology_500kMapUnitPolys_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WGS_Surface_Geology_500kMapUnitPolys_0, 
                style: style_WGS_Surface_Geology_500kMapUnitPolys_0,
                popuplayertitle: 'WGS_Surface_Geology_500k — MapUnitPolys',
                interactive: true,
    title: 'WGS_Surface_Geology_500k — MapUnitPolys<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_0.png" /> ice<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_1.png" /> MZam<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_2.png" /> MZc<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_3.png" /> MZgn<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_4.png" /> MZhm<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_5.png" /> MZi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_6.png" /> MZm<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_7.png" /> MZmi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_8.png" /> MZms<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_9.png" /> MZmt<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_10.png" /> MZmv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_11.png" /> MZn<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_12.png" /> MZog<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_13.png" /> MZPZam<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_14.png" /> MZPZhm<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_15.png" /> MZPZmt<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_16.png" /> MZPZu<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_17.png" /> MZv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_18.png" /> pChm<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_19.png" /> pCi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_20.png" /> pCms<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_21.png" /> pCmv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_22.png" /> PZgn<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_23.png" /> PZi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_24.png" /> PZms<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_25.png" /> PZmt<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_26.png" /> PZmv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_27.png" /> PZpCms<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_28.png" /> Qa<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_29.png" /> Qad<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_30.png" /> Qd<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_31.png" /> Qf<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_32.png" /> Qgd<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_33.png" /> Qi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_34.png" /> Ql<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_35.png" /> Qls<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_36.png" /> QTc<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_37.png" /> QTi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_38.png" /> QTv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_39.png" /> Qv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_40.png" /> Qvt<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_41.png" /> Tc<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_42.png" /> Ti<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_43.png" /> TKgn<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_44.png" /> TKi<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_45.png" /> TKog<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_46.png" /> Tm<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_47.png" /> Tn<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_48.png" /> Tv<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_49.png" /> Tv(c)<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_50.png" /> Tv(cr)<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_51.png" /> Tvt<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_52.png" /> tz<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_53.png" /> wtr<br />\
    <img src="styles/legend/WGS_Surface_Geology_500kMapUnitPolys_0_54.png" /> <br />'
        });
var lyr_OverBurdenTop_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'OverBurdenTop',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/OverBurdenTop_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13563718.747022, 5505933.495115, -12842638.887940, 6176918.470386]
                            })
                        });
var format_NHDWAMajor_NHDWaterbodies_2 = new ol.format.GeoJSON();
var features_NHDWAMajor_NHDWaterbodies_2 = format_NHDWAMajor_NHDWaterbodies_2.readFeatures(json_NHDWAMajor_NHDWaterbodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHDWAMajor_NHDWaterbodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHDWAMajor_NHDWaterbodies_2.addFeatures(features_NHDWAMajor_NHDWaterbodies_2);
var lyr_NHDWAMajor_NHDWaterbodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHDWAMajor_NHDWaterbodies_2, 
                style: style_NHDWAMajor_NHDWaterbodies_2,
                popuplayertitle: 'NHDWAMajor_NHDWaterbodies',
                interactive: false,
    title: 'NHDWAMajor_NHDWaterbodies<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_0.png" /> Alder Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_1.png" /> Alkali Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_2.png" /> American Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_3.png" /> Anderson Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_4.png" /> Baker Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_5.png" /> Banks Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_6.png" /> Bead Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_7.png" /> Big Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_8.png" /> Billy Clapp Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_9.png" /> Black Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_10.png" /> Blue Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_11.png" /> Bonnie Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_12.png" /> Brook Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_13.png" /> Buffalo Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_14.png" /> Bull Run Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_15.png" /> Bull Run Reservoir Number One<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_16.png" /> Bumping Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_17.png" /> Burbank Slough<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_18.png" /> Calispell Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_19.png" /> Calligan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_20.png" /> Capitol Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_21.png" /> Carty Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_22.png" /> Castle Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_23.png" /> Cave Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_24.png" /> Chatcolet Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_25.png" /> Cheewhat Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_26.png" /> Chester Morse Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_27.png" /> Chilliwack Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_28.png" /> Christina Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_29.png" /> Cle Elum Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_30.png" /> Clear Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_31.png" /> Cocolalla Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_32.png" /> Coeur d\'Alene Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_33.png" /> Coffeepot Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_34.png" /> Coldwater Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_35.png" /> Conconully Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_36.png" /> Conconully Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_37.png" /> Conkle Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_38.png" /> Crockett Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_39.png" /> Cultus Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_40.png" /> Curlew Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_41.png" /> Deer Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_42.png" /> Diablo Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_43.png" /> Diamond Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_44.png" /> Dickey Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_45.png" /> Domke Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_46.png" /> Doobah Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_47.png" /> Duck Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_48.png" /> Elk Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_49.png" /> Ellison Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_50.png" /> Eloika Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_51.png" /> Evergreen Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_52.png" /> Fernan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_53.png" /> Fish Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_54.png" /> Franklin D Roosevelt Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_55.png" /> Grays Harbor<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_56.png" /> Green Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_57.png" /> Harrison Slough<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_58.png" /> Hauser Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_59.png" /> Hobiton Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_60.png" /> Hood Canal<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_61.png" /> Howard A Hanson Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_62.png" /> Hydraulic Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_63.png" /> Ideal Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_64.png" /> Jameson Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_65.png" /> Jetty Lagoon<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_66.png" /> Kachess Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_67.png" /> Kalamalka Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_68.png" /> Keechelus Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_69.png" /> Kettle River Arm<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_70.png" /> Keyport Lagoon<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_71.png" /> Killarney Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_72.png" /> Lacamas Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_73.png" /> Lake Bonneville<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_74.png" /> Lake Campbell<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_75.png" /> Lake Cavanaugh<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_76.png" /> Lake Celilo<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_77.png" /> Lake Chaplain<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_78.png" /> Lake Chelan<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_79.png" /> Lake Crescent<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_80.png" /> Lake Cushman<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_81.png" /> Lake Dorothy<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_82.png" /> Lake Entiat<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_83.png" /> Lake Goodwin<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_84.png" /> Lake Hayden<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_85.png" /> Lake Herbert G West<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_86.png" /> Lake Kapowsin<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_87.png" /> Lake Lawrence<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_88.png" /> Lake Merwin<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_89.png" /> Lake Pateros<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_90.png" /> Lake Pend Oreille<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_91.png" /> Lake Pleasant<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_92.png" /> Lake Quinault<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_93.png" /> Lake Roesiger<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_94.png" /> Lake Sacajawea<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_95.png" /> Lake Samish<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_96.png" /> Lake Sammamish<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_97.png" /> Lake Sawyer<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_98.png" /> Lake Scanewa<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_99.png" /> Lake Shannon<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_100.png" /> Lake Stevens<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_101.png" /> Lake Sutherland<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_102.png" /> Lake Tapps<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_103.png" /> Lake Terrell<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_104.png" /> Lake Umatilla<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_105.png" /> Lake Union<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_106.png" /> Lake Wallula<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_107.png" /> Lake Washington<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_108.png" /> Lake Washington Ship Canal<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_109.png" /> Lake Wenatchee<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_110.png" /> Lake Whatcom<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_111.png" /> Lake Youngs<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_112.png" /> Lenore Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_113.png" /> Liberty Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_114.png" /> Long Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_115.png" /> Loon Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_116.png" /> Lost Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_117.png" /> Mason Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_118.png" /> Mayfield Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_119.png" /> McCormack Slough<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_120.png" /> Merrill Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_121.png" /> Mineral Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_122.png" /> Missezula Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_123.png" /> Moses Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_124.png" /> Nahwatzel Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_125.png" /> Newman Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_126.png" /> Nine Mile Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_127.png" /> Nisqually Flats<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_128.png" /> Nitinat Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_129.png" /> North Twin Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_130.png" /> Okanagan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_131.png" /> Omak Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_132.png" /> Osborn Bay Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_133.png" /> Osoyoos Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_134.png" /> Otter Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_135.png" /> Owhi Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_136.png" /> Oyama Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_137.png" /> Ozette Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_138.png" /> Packwood Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_139.png" /> Palmer Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_140.png" /> Park Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_141.png" /> Pattison Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_142.png" /> Peachland Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_143.png" /> Pinaus Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_144.png" /> Potholes Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_145.png" /> Priest Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_146.png" /> Priest Rapids Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_147.png" /> Puget Sound<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_148.png" /> Riffe Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_149.png" /> Rimrock Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_150.png" /> Rock Island Pool<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_151.png" /> Rock Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_152.png" /> Rose Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_153.png" /> Ross Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_154.png" /> Rufus Woods Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_155.png" /> Sacheen Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_156.png" /> Saddle Mountain Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_157.png" /> Sanpoil River Arm<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_158.png" /> Scooteney Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_159.png" /> Shawnigan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_160.png" /> Silver Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_161.png" /> Skaha Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_162.png" /> Skookumchuck Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_163.png" /> Smelter Lakes<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_164.png" /> Soap Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_165.png" /> Sooke Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_166.png" /> South Fork Tolt Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_167.png" /> South Twin Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_168.png" /> Spada Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_169.png" /> Spanaway Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_170.png" /> Spectacle Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_171.png" /> Spirit Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_172.png" /> Spokane River Arm<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_173.png" /> Sprague Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_174.png" /> St. Mary Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_175.png" /> Steilacoom Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_176.png" /> Sullivan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_177.png" /> Summit Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_178.png" /> Swalwell Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_179.png" /> Swan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_180.png" /> Swift Reservoir<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_181.png" /> Sylvan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_182.png" /> The Lagoon<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_183.png" /> Thompson Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_184.png" /> Twin Lakes<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_185.png" /> Upper Arrow Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_186.png" /> Upper Priest Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_187.png" /> Vancouver Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_188.png" /> Vaseux Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_189.png" /> Waitts Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_190.png" /> Walupt Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_191.png" /> Wanapum Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_192.png" /> Wannacut Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_193.png" /> Waptus Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_194.png" /> Westhaven Cove<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_195.png" /> Whatshan Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_196.png" /> White River Glacier<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_197.png" /> Willapa Bay<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_198.png" /> Williams Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_199.png" /> Wood Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_200.png" /> Wynoochee Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_201.png" /> Yale Lake<br />\
    <img src="styles/legend/NHDWAMajor_NHDWaterbodies_2_202.png" /> <br />'
        });
var format_ColumbiaRiverBasin_3 = new ol.format.GeoJSON();
var features_ColumbiaRiverBasin_3 = format_ColumbiaRiverBasin_3.readFeatures(json_ColumbiaRiverBasin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColumbiaRiverBasin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColumbiaRiverBasin_3.addFeatures(features_ColumbiaRiverBasin_3);
var lyr_ColumbiaRiverBasin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColumbiaRiverBasin_3, 
                style: style_ColumbiaRiverBasin_3,
                popuplayertitle: 'Columbia River Basin',
                interactive: false,
                title: 'Columbia River Basin'
            });
var format_CountyBoundaries_4 = new ol.format.GeoJSON();
var features_CountyBoundaries_4 = format_CountyBoundaries_4.readFeatures(json_CountyBoundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundaries_4.addFeatures(features_CountyBoundaries_4);
var lyr_CountyBoundaries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundaries_4, 
                style: style_CountyBoundaries_4,
                popuplayertitle: 'County Boundaries',
                interactive: true,
                title: '<img src="styles/legend/CountyBoundaries_4.png" /> County Boundaries'
            });
var format_AreaIntrest_5 = new ol.format.GeoJSON();
var features_AreaIntrest_5 = format_AreaIntrest_5.readFeatures(json_AreaIntrest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaIntrest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaIntrest_5.addFeatures(features_AreaIntrest_5);
var lyr_AreaIntrest_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaIntrest_5, 
                style: style_AreaIntrest_5,
                popuplayertitle: 'AreaIntrest',
                interactive: false,
                title: '<img src="styles/legend/AreaIntrest_5.png" /> AreaIntrest'
            });
var format_MidColumbiaBasinCities_6 = new ol.format.GeoJSON();
var features_MidColumbiaBasinCities_6 = format_MidColumbiaBasinCities_6.readFeatures(json_MidColumbiaBasinCities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MidColumbiaBasinCities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MidColumbiaBasinCities_6.addFeatures(features_MidColumbiaBasinCities_6);
var lyr_MidColumbiaBasinCities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MidColumbiaBasinCities_6, 
                style: style_MidColumbiaBasinCities_6,
                popuplayertitle: 'MidColumbiaBasinCities',
                interactive: false,
                title: '<img src="styles/legend/MidColumbiaBasinCities_6.png" /> MidColumbiaBasinCities'
            });
var group_BasaltandOverburden = new ol.layer.Group({
                                layers: [lyr_OverBurdenTop_1,],
                                fold: "open",
                                title: 'Basalt and Overburden'});

lyr_WGS_Surface_Geology_500kMapUnitPolys_0.setVisible(true);lyr_OverBurdenTop_1.setVisible(true);lyr_NHDWAMajor_NHDWaterbodies_2.setVisible(true);lyr_ColumbiaRiverBasin_3.setVisible(true);lyr_CountyBoundaries_4.setVisible(true);lyr_AreaIntrest_5.setVisible(true);lyr_MidColumbiaBasinCities_6.setVisible(true);
var layersList = [lyr_WGS_Surface_Geology_500kMapUnitPolys_0,group_BasaltandOverburden,lyr_NHDWAMajor_NHDWaterbodies_2,lyr_ColumbiaRiverBasin_3,lyr_CountyBoundaries_4,lyr_AreaIntrest_5,lyr_MidColumbiaBasinCities_6];
lyr_WGS_Surface_Geology_500kMapUnitPolys_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Map_Unit': 'MapUnit', 'Identity_Confidence': 'IdentityConfidence', 'Label': 'Label', 'Symbol': 'Symbol', 'Data_Source_ID': 'DataSourceID', 'Notes': 'Notes', 'Map_Unit_Polys_ID': 'MapUnitPolys_ID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', });
lyr_NHDWAMajor_NHDWaterbodies_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'AreaSqKm': 'AreaSqKm', 'Elevation': 'Elevation', 'ReachCode': 'ReachCode', 'FType': 'FType', 'FCode': 'FCode', 'Visibility': 'Visibility', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ColumbiaRiverBasin_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'GNIS_Name': 'GNIS_Name', 'ReachCode': 'ReachCode', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'LengthKM': 'LengthKM', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'MainPath': 'MainPath', 'InNetwork': 'InNetwork', 'Visibility': 'Visibility', 'Enabled': 'Enabled', 'StreamOrde': 'StreamOrde', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_CountyBoundaries_4.set('fieldAliases', {'permanent_': 'permanent_', 'source_fea': 'source_fea', 'source_dat': 'source_dat', 'source_d_1': 'source_d_1', 'source_ori': 'source_ori', 'loaddate': 'loaddate', 'fcode': 'fcode', 'state_fips': 'state_fips', 'state_name': 'state_name', 'county_fip': 'county_fip', 'county_nam': 'county_nam', 'stco_fipsc': 'stco_fipsc', 'population': 'population', 'areasqkm': 'areasqkm', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'ObjectID': 'ObjectID', });
lyr_AreaIntrest_5.set('fieldAliases', {'id': 'id', });
lyr_MidColumbiaBasinCities_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Attr1': 'Attr1', });
lyr_WGS_Surface_Geology_500kMapUnitPolys_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Map_Unit': 'TextEdit', 'Identity_Confidence': 'ValueMap', 'Label': 'TextEdit', 'Symbol': 'TextEdit', 'Data_Source_ID': 'TextEdit', 'Notes': 'TextEdit', 'Map_Unit_Polys_ID': 'TextEdit', 'created_user': 'TextEdit', 'created_date': 'DateTime', 'last_edited_user': 'TextEdit', 'last_edited_date': 'DateTime', });
lyr_NHDWAMajor_NHDWaterbodies_2.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'AreaSqKm': 'TextEdit', 'Elevation': 'TextEdit', 'ReachCode': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'Visibility': 'Range', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ColumbiaRiverBasin_3.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'GNIS_Name': 'TextEdit', 'ReachCode': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'LengthKM': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'MainPath': 'Range', 'InNetwork': 'Range', 'Visibility': 'Range', 'Enabled': 'Range', 'StreamOrde': 'Range', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_CountyBoundaries_4.set('fieldImages', {'permanent_': 'TextEdit', 'source_fea': 'TextEdit', 'source_dat': 'TextEdit', 'source_d_1': 'TextEdit', 'source_ori': 'TextEdit', 'loaddate': 'DateTime', 'fcode': 'Range', 'state_fips': 'TextEdit', 'state_name': 'TextEdit', 'county_fip': 'TextEdit', 'county_nam': 'TextEdit', 'stco_fipsc': 'TextEdit', 'population': 'Range', 'areasqkm': 'TextEdit', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_AreaIntrest_5.set('fieldImages', {'id': 'TextEdit', });
lyr_MidColumbiaBasinCities_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Attr1': 'TextEdit', });
lyr_WGS_Surface_Geology_500kMapUnitPolys_0.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Map_Unit': 'no label', 'Identity_Confidence': 'no label', 'Label': 'inline label - always visible', 'Symbol': 'no label', 'Data_Source_ID': 'no label', 'Notes': 'no label', 'Map_Unit_Polys_ID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', });
lyr_NHDWAMajor_NHDWaterbodies_2.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'GNIS_Name': 'no label', 'AreaSqKm': 'no label', 'Elevation': 'no label', 'ReachCode': 'no label', 'FType': 'no label', 'FCode': 'no label', 'Visibility': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ColumbiaRiverBasin_3.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_': 'no label', 'GNIS_Name': 'no label', 'ReachCode': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'LengthKM': 'no label', 'FlowDir': 'no label', 'WBArea_Per': 'no label', 'FType': 'no label', 'FCode': 'no label', 'MainPath': 'no label', 'InNetwork': 'no label', 'Visibility': 'no label', 'Enabled': 'no label', 'StreamOrde': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_CountyBoundaries_4.set('fieldLabels', {'permanent_': 'no label', 'source_fea': 'no label', 'source_dat': 'no label', 'source_d_1': 'no label', 'source_ori': 'no label', 'loaddate': 'no label', 'fcode': 'no label', 'state_fips': 'no label', 'state_name': 'no label', 'county_fip': 'no label', 'county_nam': 'no label', 'stco_fipsc': 'no label', 'population': 'no label', 'areasqkm': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'ObjectID': 'no label', });
lyr_AreaIntrest_5.set('fieldLabels', {'id': 'no label', });
lyr_MidColumbiaBasinCities_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Attr1': 'no label', });
lyr_MidColumbiaBasinCities_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});