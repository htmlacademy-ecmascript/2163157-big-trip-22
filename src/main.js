import { render, RenderPosition } from '../src/render.js';

import ComponentsPresenter from './presenter/render-presenter.js';

import SortView from './view/sort-view.js';
/*import CreateNewFormView from './view/create-new-form-view.js';
import EditFormView from './view/edit-form-view.js';
import FilterView from './view/filter-view.js';
import PointView from './view/point-view.js';*/

const sortElement = document.querySelector('.trip-main');
/*const createNewFormElement = document.querySelector('.trip-events__item');
const editElement = document.querySelector('.trip-events__item');
const filterElement = document.querySelector('.trip-controls__filters');
const pointElement = document.querySelector('.trip-events');*/

render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
/*render(new CreateNewFormView(), createNewFormElement, RenderPosition.AFTERBEGIN);
render(new EditFormView(), editElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement, RenderPosition.AFTERBEGIN);
render(new PointView(), pointElement, RenderPosition.AFTERBEGIN);*/

ComponentsPresenter.init();

