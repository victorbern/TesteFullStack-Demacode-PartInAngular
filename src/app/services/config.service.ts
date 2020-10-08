export class ConfigService {
    private UrlService: string;

    constructor() {
        this.UrlService = 'http://localhost:8090/service';
    }

    getUrlService(): string {
        return this.UrlService;
    }
}