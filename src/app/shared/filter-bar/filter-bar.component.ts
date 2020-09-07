import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';
import { CommonModule } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { FilterPipe } from './filter.pipe';
import { EllipsePipeModule } from '../pipes/ellipse.pipe';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnDestroy {
  filters;

  eventBusSub;
  constructor(private eventBus: EventBusService) {
    this.eventBusSub = eventBus.on('filterApplied').subscribe(filtersData => {
      this.filters = filtersData;
    });
  }

  ngOnInit() {
    const tempFilters = Utils.getItemFromLocalStorage('filters');
    if (tempFilters) {
      this.filters = JSON.parse(tempFilters);
    }
  }

  ngOnDestroy() {
    this.eventBusSub.unsubscribe();
  }

  removeFilter(item) {
    this.filters[item.key] = '';
    Utils.setItemToLocalStorage('filters', JSON.stringify(this.filters));
    this.eventBus.emit('filterApplied', this.filters);
  }
}

@NgModule({
  declarations: [FilterBarComponent, FilterPipe],
  imports: [CommonModule, EllipsePipeModule],
  exports: [FilterBarComponent],
  providers: [EventBusService]
})
export class FilterBarModule {}
