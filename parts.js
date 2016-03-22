/**
 * Created by seaasun on 2016-3-20.
 */

var parts={
  tree_customize:false,
  elastic_earch:{
    sort:{
      group:1,
      extend:'elastic_earch',
    },
    filter:{
      group:1
    }
  }
}


/*
var parts={
  'tree_customize':false,
  'es':[
    {
      field: 'sort',
      extend:'sort',
      array:true,
      group:1,
      choose:true,
    },
    {
      field: 'filter',
      extend:'filter',
      group:2,
      choose:true
    },

    {
      field: 'query',
      group:3,
      extend:'query',
      choose:true
    },
    {
      field: 'from',
      group:4,
    },
    {
      field: 'size',
      gorup:5,
    }
  ],


  'filter':[
    {
      field: 'term',
      group:1,
      child: [
        {field: '',
          undelete:true}
      ]
    },
    {
      field:'exist',
      group:1,
      extend:'exist_null',
      child:[
        {field:'field',
          undelete:true}
      ]
    },
    {
      field:'prefix',
      group:1,
      disabled:true,
      child:[
        {field:'name.second',
          undelete:true}

      ]
    },
    {
      field:'_cache',
      value:true,
      disabled:true,
      group:2
    },
    {
      field: 'range',
      group:1,
      child: [
        {
          field: '',
          open: true,
          undelete:true,
          child: [
            {field: 'from',
              },
            {field: 'to',
              }
          ]
        }
      ]
    },
    {
      field: 'bool',
      group:1,
      extend:'filter_bool',
      choose:true,
    },
    {
      field: 'and',
      array:true,
      group:1,
      choose:true,
      extend:'filter'
    },
    {
      field: 'or',
      array:true,
      group:1,
      choose:true,
      extend:'filter'
    },
    {
      field: 'not',
      group:1,
      choose:true,
      extend:'filter'
    },
    {
      field:'missing',
      group:1,
      open:true,
      child:[
        {
          field:''
        }
      ]
    },
    {
      field:'geo_bounding_box',
      group:1,
      open: true,
      child:[
        {
          field:'',
          open: true,
          undelete:true,
          child:[
            {
              field:'top_left',
              undelete:true,
            },
            {
              field:'bottom_right',
              undelete:true,
            }
          ]
        }
      ]
    },
    {
      field:'geo_distance',
      group:1,
      open:true,
      child:[
        {
          field:'distance',
          open:true,
        },
        {
          field:'location',
          open:true,
          undelete:true,
          child:[
            {
              field:'lat',
              open:true,
              undelete:true
            },
            {
              field:'lon',
              open:true,
              undelete:true

            }
          ]
        }
      ]
    }
  ],
  'filter_bool':[
    {
      field: 'must',
      group:1,
      array:true,
      choose:true,
      extend:'filter'
    },
    {
      field: 'must_not',
      group:2,
      array:true,
      choose:true,
      extend:'filter'
    },
    {
      field: 'should',
      group:3,
      array:true,
      choose:true,
      extend:'filter'
    },
  ],
  'exist_null':[
    {
    field:"null_value",
    value:"_null_"
  }],
  'sort':[
    {
      field:'',
      name:'[field]',
      value:'asc',
      arrayValue:['desc','asc'],
    },
    {
      field:'_geo_distance',
      open:true,
      group:1,
      child:[
        {
          field:'location',
          undelete:true,
          open:true,
          child:[
            {
              field:'lat',
              undelete:true
            },
            {
              field:'lon',
              undelete:true
            }
          ]

        }
      ]


    }
  ],
  query:[
    {
      field:'term',
      open:true,
      group:1,
      child:[
        {
          field:''
        }
      ]
    },
    {
      field:'match',
      open:true,
      group:1,
      child:[
        {
          field:'',
          open:true,
          extend:'ony_analyzer',
          undelete:true,
          child:[
            {
              field:'query',
              undelete:true
            },
            {
              field:'operator',
              value:'and',
              arrayValue:['and','or'],
              undelete:true
            },
            {
              field:'analyzer'
            }
          ]
        }
      ]
    },
    {
      field:'multi_match',
      extend:'only_analyzer',
      group:1,
      open:true,
      child:[
        {
          field:'query',
          undelete:true,
        },
        {
          field:'fields',
          extend:'fields',
          array:true,
          open:true,
          undelete:true,
          child:[
            {
              'field':''
            },
            {
              'field':''
            },
          ]
        },
        {
          field:'operator',
          value:'and',
          arrayValue:['and','or'],
          undelete:true
        },
        {
          field:'analyzer',
          group:1,
        }
      ]
    },
    {
      field:'bool',
      extend:'query_bool',
      group:1,
      choose:true,
    }
  ],
  query_bool:[
    {
      field:'must',
      extend:'query',
      group:1,
      array:true,
      choose:true,
    },
    {
      field:'must_not',
      extend:'query',
      group:2,
      array:true,
      choose:true,
    },
    {
      field:'should',
      extend:'query',
      group:3,
      array:true,
      choose:true,
    },
    {
      field:"minimum_should_match",
      group:4,
    },{
      field:"boost",
      group:5,
    }
  ],
  only_analyzer:[{
    field:'analyzer',
    open:true,
    group:1,
  }],
  fields:[
    {
      field:'',
      name:'[filed]'
    }
  ]
};
*/