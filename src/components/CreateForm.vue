<template>
    <form>
        <div class="input_group">
            <label for="title">Текст задания</label>
            <input type="text" id="title">
        </div>
        <div class="input_group">
            <label for="price">Стоимость</label>
            <input type="number" id="cost">
        </div>
        <div class="input_group">
            <label for="dateBegin">Дата начала</label>
            <input type="datetime-local" id="dateBegin">
        </div>
        <div class="input_group">
            <label for="dateEnd">Выполнить до</label>
            <input type="datetime-local" id="dateEnd">
        </div>
        <div class="btn_container">
            <button type="submit" class="create_btn">Создать</button>
        </div>
    </form>
</template>
<script>

export default {
    name: 'CreateForm',
    data() {
        return {
            categories: [],
        }
    },
    
}
</script>
<style scoped>
form {

    padding: 20px;
    display: block;
}

.input_group {
    margin: 10px;
}

.input_group input {
    height: 30px;
    border: 2px solid #a1a1a1;
    border-radius: 5px;
    width: 100%;
    margin-top: 5px;
}

.input_group label {
    font-size: 18px;
}

.btn_container {
    display: flex;
    justify-content: center;
    margin: 20px 10px;
}

button {
    padding: 10px;
    width: 40%;
    border: 1px solid #a1a1a1;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
}

.create_btn {
    background-color: rgb(81, 127, 234);
    color: white;
}

button:hover {
    box-shadow: 5px 5px 5px #a1a1a1;
    transition: .5s;
}
</style>