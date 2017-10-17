import { createLocalVue, shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import Vuex from 'vuex'
import ButtonComponent from '../../../src/components/ButtonComponent'

describe('ButtonComponent.vue', () => {
  test('calls toggleModal when button is clicked', () => {
    const actions = {
      toggleModal: jest.fn()
    }
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      actions
    })
    const wrapper = shallow(ButtonComponent, {
      localVue,
      store
    })
    wrapper.find('button').trigger('click')
    expect(actions.toggleModal).toHaveBeenCalled()
  })

  it('has same HTML structure', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store({
    actions: {toggleModal: () => {}},
  })
  const renderer = createRenderer()
  const wrapper = shallow(ButtonComponent, {
    localVue,
    store
  })

  renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err)
    expect(str).toMatchSnapshot()
  })
})
})
