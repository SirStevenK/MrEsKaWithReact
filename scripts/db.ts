import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

class Database {
    db: lowdb.LowdbSync<{articles: ArticleAttributes[], images: ImageAttributes[]}>

    constructor() {
        this.db = lowdb<lowdb.AdapterSync>(new FileSync('db.json'));
        this.db.defaults({articles: [], images: []}).write();
    }

    getArticle(url: string) {
        return this.db.get('articles').find({url}).value() || null;
    }

    getArticles(filter: Partial<ArticleAttributes> = {}) {
        return this.db.get('articles').filter(filter).value();
    }

    addArticle(article: ArticleAttributes) {
        if (this.getArticles({url: article.url}).length == 0) {
            this.db.get('articles').push(article).write();
            return true;
        }
        else return false;
    }

    deleteArticle(url: string) {
        this.db.get('articles').remove({url}).write();
        return true;
    }

    getImages(filter: Partial<ImageAttributes> = {}) {
        return this.db.get('images').filter(filter).value();
    }

    addImage(image: ImageAttributes) {
        if (this.getImages({name: image.name}).length == 0) {
            this.db.get('images').push(image).write();
            return true;
        }
        else return false;
    }
    
    deleteImage(name: string) {
        this.db.get('images').remove({name}).write();
        return true;
    }
}

export default new Database();