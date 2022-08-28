<template>
    <div class="card_container">
        <div class="ch_box">
            <button></button>
        </div>

        <div class="task_info">
            <div class="task_header">
                <span class="task_title">
                    {{ task.title }}
                </span>

                <span class="task_category">
                    {{ task.category }}
                </span>
            </div>

            <div class="task_about">
                <div class="deadline">
                    <font-awesome-icon icon="fa-regular fa-calendar-days" />
                    <span>{{ task.dateEnd }}</span>
                </div>
                <div class="cost">
                    <font-awesome-icon icon="fa-regular fa-address-book" />
                    <span>{{ task.price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'TaskCard',
    props: {
        task: {
            category: String,
            title: String,
            dateEnd: String,
            price: Number
        }
    }
}
</script>
<style scoped lang="sass">
    .card_container
        width: 70%
        background-color: #fff7f0
        border: 1px solid #a3a3a3
        border-radius: 10px
        display: flex
        padding: 10px
        margin: 15px auto

        .ch_box
            min-height: 100px
            display: flex 
            margin: 15px

            button
                width: 20px
                height: 20px
                border: 1px solid #000
                border-radius: 10px
                cursor: pointer
                background-color: #fff

                &:hover
                    background-color: grey
                    transition: .5s
                        
        .task_info
            width: 100%
            padding: 10px
            min-height: 100px

            .task_header
                min-height: 50%
                display: flex
                justify-content: space-between
                align-items: flex-start            

                .task_title
                    font-size: 1.3em
                    letter-spacing: 2px
                    padding-bottom: 5px
                    margin-right: 10px

                .task_category
                    font-size: 16px
                    letter-spacing: 1px
                    border: 1px solid #000
                    border-radius: 15px
                    padding: 3px 10px
                    white-space: nowrap
                    
                    @media (max-width: 800px) 
                        white-space: normal  

                @media (max-width: 800px) 
                    flex-direction: column  

            .task_about
                bottom: 5px
                

                .deadline, .cost
                    margin-top: 10px
                    
                    & span
                        margin-left: 10px
                        font-size: 16px
                        letter-spacing: 1px


        &:hover
            box-shadow: 5px 5px 5px #b3b3b3   
            transition: .5s   

        
                    
                    
</style>