Ext.define('Redwood.store.Scripts', {
    extend: 'Ext.data.TreeStore',
    model: 'Redwood.model.Scripts',

    autoLoad: true,
    autoSync: false,
    fields: ['fullpath','text', 'cls','expanded','children'],
    sorters: [{

        property : 'cls',
        direction: 'DESC'

    },
    {
        property : 'text',
        direction: 'ASC'

    }

    ],
    proxy: {
        type: 'rest',
        model: 'Redwood.model.Scripts',
        url: '/scripts',
        reader: {
            type: 'json'
            //root: 'users',
            //successProperty: 'success'
        }
    },
    root: {
        //leaf : true,
        text: 'src',
        id: 'src',
        cls: 'folder',
        expanded: true
    }
});