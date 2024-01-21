/*import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateNewFormView from '../view/create-new-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FilterView from '../view/filter-view.js';
import PointView from '../view/point-view.js';

export default class ComponentsPresenter {
  pointComponent = new PointView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }


  init() {
    render(new SortView(), this.eventsContainer);
    render(this.pointComponent, this.eventsContainer);
    render(new EditFormView(), this.pointComponent.getElement());
    render(new FilterView(), this.eventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointComponent.getElement());
    }

    render(new CreateNewFormView(), this.pointComponent.getElement());
  }
}*/

import { render } from '../render.js';
import SortListView from '../view/sort-list-view.js';
import NewPointFormView from '../view/new-point-form-view.js';
import PointFormEditView from '../view/point-form-edit-view.js';
import PointListView from '../view/point-list-view.js';
import PointItemView from '../view/point-item-view.js';

class EventsPresenter {
  pointListComponent = new PointListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }


  init() {
    render(new SortListView(), this.eventsContainer);
    render(this.pointListComponent, this.eventsContainer);
    render(new PointFormEditView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointItemView(), this.pointListComponent.getElement());
    }

    render(new NewPointFormView(), this.pointListComponent.getElement());
  }
}
export default EventsPresenter;
