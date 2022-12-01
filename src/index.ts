import './sass/index.scss';
import { App } from './app/app';
import { Header } from './layout/header';
import { Title } from './components/title';
import { Content } from './components/content';
import { Offer } from './components/offer';
import { Button } from './components/button';
import { Footer } from './layout/footer';

const header = new Header().render();
const title = new Title().render();
const content = new Content().render();
const offer = new Offer().render();
const button = new Button().render();
const footer = new Footer().render();

const app = new App(header, title, content, offer, button, footer);
app.start();
