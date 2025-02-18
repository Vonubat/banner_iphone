import { LocalizationService } from '../services/localizationService';
import { createHTMLElement, createSVGElement } from '../utils/htmlElementFactory';

export class Header extends LocalizationService {
  private createHeader(): HTMLElement {
    return createHTMLElement('header', {
      cssClassList: ['header'],
    });
  }

  private createRestoreAnchor(): HTMLAnchorElement {
    return createHTMLElement('a', {
      attributes: [['href', '#']],
      cssClassList: ['anchor-restore'],
      innerHtml: this.langData.Restore,
    });
  }

  private createCloseAnchor(): HTMLAnchorElement {
    const closeAnchor = createHTMLElement('a', {
      attributes: [['href', '#']],
      cssClassList: ['anchor-cancel'],
    });
    const cancelIcon = createSVGElement('../assets/close.svg', {
      boxWidth: '16px',
      boxHeight: '16px',
    });
    closeAnchor.appendChild(cancelIcon);
    return closeAnchor;
  }

  public render(): HTMLElement {
    const header = this.createHeader();
    const closeBtn = this.createCloseAnchor();
    const restoreAnchor = this.createRestoreAnchor();
    header.append(closeBtn, restoreAnchor);
    return header;
  }
}
