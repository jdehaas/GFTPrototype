/*
 * File: app/view/Viewport.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.Container',

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Ebenen',
                items: [
                    {
                        xtype: 'checkboxfield',
                        itemId: 'SchweizerStaedteCheckbox',
                        label: 'Schweizer Städte',
                        name: 'SchweizerStaedteCheckbox'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Coin',
                        name: 'CoinCheckbox'
                    }
                ]
            },
            {
                xtype: 'map',
                height: 300,
                id: 'gftmap',
                mapOptions: {
                    zoom: 5
                },
                useCurrentLocation: true
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'GFTPrototype'
            }
        ]
    }

});