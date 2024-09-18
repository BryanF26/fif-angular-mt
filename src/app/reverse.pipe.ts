import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: 'reserve',
    standalone: true
})
export class ReservePipe implements PipeTransform{
    transform(value: any) {
        return value.split('').reverse().join('');
    }
}