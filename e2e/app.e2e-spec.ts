import { V4wPage } from './app.po'

describe('v4w App', () => {
  let page: V4wPage

  beforeEach(() => {
    page = new V4wPage()
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('app works!')
  })
})
