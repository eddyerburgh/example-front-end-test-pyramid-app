import { createLocalVue, shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import Vuex from 'vuex'
import ModalComponent from '../../../src/components/ModalComponent'

describe('ModalComponent.vue', () => {
  test('has class is-active when displayModal is true', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      getters: {displayModal: () => true},
      actions: {
        toggleModal: () => {}
      }
    })
    const wrapper = shallow(ModalComponent, {
      localVue,
      store
    })
    expect(wrapper.element.classList).toContain('is-active')
  })

  test('has class is-active when displayModal is false', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      getters: {displayModal: () => false},
      actions: {
        toggleModal: () => {}
      }
    })
    const wrapper = shallow(ModalComponent, {
      localVue,
      store
    })
    expect(wrapper.element.classList).not.toContain('is-active')
  })

  test('calls toggleModal when delete button is clicked', () => {
    const actions = {
      toggleModal: jest.fn()
    }
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      actions,
      getters: {displayModal: () => {}}
    })
    const wrapper = shallow(ModalComponent, {
      localVue,
      store
    })
    wrapper.find('.delete').trigger('click')
    expect(actions.toggleModal).toHaveBeenCalled()
  })

  test('calls toggleModal when success button is clicked', () => {
    const actions = {
      toggleModal: jest.fn()
    }
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      actions,
      getters: {displayModal: () => {}}
    })
    const wrapper = shallow(ModalComponent, {
      localVue,
      store
    })
    wrapper.find('.is-success ').trigger('click')
    expect(actions.toggleModal).toHaveBeenCalled()
  })

    it('has same HTML structure', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      actions: {toggleModal: () => {}},
      getters: {displayModal: () => {}}
    })
    const renderer = createRenderer()
    const wrapper = shallow(ModalComponent, {
      localVue,
      store
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
