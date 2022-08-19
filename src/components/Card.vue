<template>
    <div class="task_card">

        <div class="ch_box">
            <span>{{ task.category }}</span>
            <button></button>
        </div>

        <div  class="task_name">
            <span>{{ task.title }}</span>
        </div>

        <div class="task_desc">
            <p>Timeline: {{ task.dateEnd }}</p>
            <p>Cost: {{ task.price }}</p>
        </div>

    </div>
</template>
<script>
export default {
    name: 'CardVue',
    props: {
        task: {
            category: String,
            title: String,
            dateEnd: Date,
            price: Number
        }
    }
}
</script>
<style>
.task_card {
    width: 350px;
    height: 200px;
    background-color: #EDF8FF;
    border-radius: 15px;
    text-align: left;
    padding: 5px;
    margin: 10px;
}

.task_card:hover{
    box-shadow: 10px 5px 5px rgb(180, 173, 173);
    transition: .5s;
}

.ch_box {
    display: flex;
    align-items: center;
    margin: 5px 0;
    justify-content: space-between;
}

.ch_box span,
button {
    text-align: left;
    margin: 5px 10px;
}

.ch_box button {
    width: 20px;
    height: 20px;
    border: 2px solid #838080;
    border-radius: 5px;
    background-color: #fff;
}

.ch_box button:hover{
    background-color: rgb(81, 127, 234);
    transition: .5s;
}

.ch_box span {
    border: 1px solid black;
    border-radius: 12px;
    padding: 2px 15px;
}

.task_name {
    padding: 10px;
    font-size: 18px;
}

.task_desc {
    margin: 5px 10px;
}

.task_desc p{
    margin: 10px 0;
    color: #838080;
    font-size: 14px;
}

</style>