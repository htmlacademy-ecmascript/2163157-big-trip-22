import { render } from '../render.js';
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
}
