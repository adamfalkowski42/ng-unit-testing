import {ReversePipe} from "./reverse.pipe";


describe('UserComponent', () => {
  it('should reverse pipe', ()=>{
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
});
