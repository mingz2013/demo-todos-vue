<template>
  <div>
    <CheckboxGroup>
      <Checkbox label="香蕉" ></Checkbox>
      <Checkbox label="苹果" ></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      value: ''
    }
  }
}
</script>
