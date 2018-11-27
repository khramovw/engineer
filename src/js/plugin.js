/* js */

document.querySelector('.btn-js').addEventListener('click', e => {
    document.querySelector('.second').scrollIntoView();
});

class ScrollPage {
    constructor() {
        this.canGo = true;
        this.pages;
        this.currpage = 1;
        this.newpage;
        this.maxpage;

        this.event();

    }
    htmlColToObj (e) {
        return [].slice.call(e);
    }

    event () {
        window.addEventListener('wheel', e => {
            e.preventDefault();

            // delayed event for touchpad
            if( !this.canGo ) return;
            this.canGo = false;

            // get direction
            let direction = e.wheelDeltaY < 0 ? 1 : -1 ;

            // get number of next page
            this.newpage = this.currpage + (direction);

            // set infinity scroll
            if( this.newpage > this.maxpage ) this.newpage = 1;
            if( this.newpage < 1 ) this.newpage = this.maxpage;

            this.pages = this.htmlColToObj(document.getElementsByTagName('section'));

            this.maxpage = this.pages.length;

            this.pages.filter( (el, i) => {
                console.log('Oi', document.getElementsByTagName('section').item(i));

                if ( el.dataset.set == this.newpage ) {

                    window.scroll(0, el.offsetTop);

                }
            });

            // set number of current page
            this.currpage = this.newpage;

            setTimeout( () => {
                this.canGo = true;
            }, 1200);

        });
    }

}
let scrolpage = new ScrollPage();