import en from '../localization/en.json';
import es from '../localization/es.json';
import fr from '../localization/fr.json';
import ja from '../localization/ja.json';
import nl from '../localization/nl.json';
import ru from '../localization/ru.json';
import zh from '../localization/zh.json';
import { Language } from '../constants';
import { Localization } from '../types/localization';
import { searchParamsHandler } from '../utils/systemLanguageHelper';

export class LocalizationService {
  private lang: Language = searchParamsHandler();

  private en: Localization = en;

  private es: Localization = es;

  private fr: Localization = fr;

  private ja: Localization = ja;

  private nl: Localization = nl;

  private ru: Localization = ru;

  private zh: Localization = zh;

  public get langData(): Localization {
    return this[this.lang];
  }
}
