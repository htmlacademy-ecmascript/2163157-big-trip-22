import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateNewFormView from '../view/create-new-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FilterView from '../view/filter-view.js';
import PointView from '../view/point-view.js';

export default class TripPresenter {
  pointComponent = new PointView();

  constructor({contentContainer}) {
    this.contentContainer = contentContainer;
  }


  init() {
    render(new SortView(), this.contentContainer);
    render(this.pointComponent, this.contentContainer);
    render(new EditFormView(), this.pointComponent.getElement());
    render(new FilterView(), this.contentContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointComponent.getElement());
    }

    render(new CreateNewFormView(), this.pointComponent.getElement());
  }

}
