import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { DataService } from '../../../@core/data/getcountrydata.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
    .rightposition{
       float:right;
       margin:10px 0px;
    }
      .icon-setting{
        display:inline-block;
        padding: .375rem .75rem !important;
      }
      .dropdown, .dropup, .btn-group {
    margin-bottom: 1rem;
  }
  .setwidth{
    width: 25%;
  }
  .dropdownset{
    height: 200px;
    overflow: scroll;
    width: 25%;
  }

  nb-card-body {
    overflow: visible;
  }
  `],
})
export class SmartTableComponent implements OnInit {
  settings = {
     hideSubHeader: false,
     actions:
      {
        position: 'right',
        add : false,
      custom: [
        {
          name: '<i class="nb-loop" (click)="onClick()"></i>',
          title: '<i class="nb-loop" (click)="onClick()"></i>',
        },
      ],
     },
   edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    reset: {
      reset: '<i class="nb-loop"></i>',
      },
    columns: {
      ProductID: {
        title: 'Product ID',
        type: 'number',
         editable: false,
         filter: false,
        },
      AndroidBase: {
        title: 'Android Base Price',
        type: 'string',
         editable: false,
          filter: false,
      },
      IOSBase: {
        title: 'IOS Base Price',
        type: 'string',
         editable: false,
          filter: false,
      },
      AndroidRecommended: {
        title: 'Android Recommended Price Range',
        type: 'string',
         editable: false,
          filter: false,
      },
      IOSRecommended: {
        title: 'IOS Recommended Price Range',
        type: 'string',
        editable: false,
         filter: false,
      },
      AndroidCustom: {
        title: 'Android Custom Price Range',
        type: 'string',
        editable: true,
         filter: false,
      },
      IOSCustom: {
        title: 'IOS Custom Price Range',
        type: 'string',
        editable: true,
         filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
public tabledata: any
  constructor(private service: SmartTableService, public dataservice: DataService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
 ngOnInit() {
   this.getDataFromJson()
  }
getDataFromJson() {
  this.dataservice.getData()
                   .subscribe((data) => { this.tabledata
                    this.tabledata = data.data;
                  });

}
    changeonddl(): void {
    }
}
