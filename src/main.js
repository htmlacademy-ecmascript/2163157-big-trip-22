import { render, RenderPosition } from '../src/render.js';

import TripPresenter from './presenter/trip-presenter.js';

import SortView from './view/sort-view.js';
import CreateNewFormView from './view/create-new-form-view.js';
import EditFormView from './view/edit-form-view.js';
import FilterView from './view/filter-view.js';
import PointView from './view/point-view.js';
import PointModel from './model/points-model.js';

const sortElement = document.querySelector('.trip-events');
const createNewFormElement = document.querySelector('.trip-events');
const editElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-controls__filters');
const pointElement = document.querySelector('.trip-events');


const pointModel = new PointModel();
const tripPresenter = new TripPresenter({
  contentContainer: pointElement,
  pointModel,
});

render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
render(new CreateNewFormView(), createNewFormElement, RenderPosition.BEFOREEND);
render(new EditFormView(), editElement, RenderPosition.AFTEREND);
render(new FilterView(), filterElement, RenderPosition.AFTERBEGIN);
render(new PointView(), pointElement, RenderPosition.BEFOREEND);
render(new PointView(), pointElement, RenderPosition.BEFOREEND);
render(new PointView(), pointElement, RenderPosition.BEFOREEND);

tripPresenter.init();
