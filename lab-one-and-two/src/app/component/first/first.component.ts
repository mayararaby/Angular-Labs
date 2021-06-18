import { Component } from "@angular/core";

@Component({
    selector:'app-first',
    templateUrl:'./first.component.html',
    styleUrls:['first.component.css']
})

export class FirstComponent{
    inputValue="";
    int :any;
    img="../../../assets/Images/0.jpg";
    index=0;
    get(data:any){
        this.inputValue = data.target.value;
    }
    changeText()
    {
        this.inputValue = "Default value";
    }
    nextImage()
    {
        if(this.index <8){
            this.img=`../../../assets/Images/${++this.index}.jpg`
            }
    }
    play()
    {
        this.int = setInterval(() => {
            this.img = `../../../assets/Images/${++this.index %8}.jpg`;
        },1000)
    }
    PreviousImage()
    {
        if(this.index > 1){
            this.img=`../../../assets/Images/${--this.index}.jpg`
            }
    }
    stop()
    {
        clearInterval(this.int);
        this.index %= 8;
    }
}