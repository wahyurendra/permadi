<script setup>
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';

onMounted(() => {

});

const toast = useToast();
const dt = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const submitted = ref(false);
const statuses = ref([
    { label: 'RUNNING', value: 'running' },
    { label: 'STOPPED', value: 'stopped' },
    { label: 'MAINTENANCE', value: 'maintenance' }
]);

// Sample data for machines
const products = ref([
    {
        id: '1000',
        code: 'MCH001',
        name: 'CNC Machine Alpha',
        url: 'https://machine1.example.com',
        description: 'High-precision computer numerical control machine for metal cutting',
        status: 'RUNNING'
    },
    {
        id: '1001',
        code: 'MCH002',
        name: 'Injection Molding Beta',
        url: 'https://machine2.example.com',
        description: 'Plastic injection molding machine with 200-ton capacity',
        status: 'MAINTENANCE'
    },
    {
        id: '1002',
        code: 'MCH003',
        name: 'Assembly Robot X1',
        url: 'https://machine3.example.com',
        description: 'Robotic arm for automated assembly operations',
        status: 'RUNNING'
    },
    {
        id: '1003',
        code: 'MCH004',
        name: 'Packaging Unit 2000',
        url: 'https://machine4.example.com',
        description: 'Automated packaging system for finished products',
        status: 'STOPPED'
    },
    {
        id: '1004',
        code: 'MCH005',
        name: 'Laser Cutter Pro',
        url: 'https://machine5.example.com',
        description: 'Industrial laser cutting machine for precise metal fabrication',
        status: 'RUNNING'
    }
]);

function formatCurrency(value) {
    if (value) return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return;
}
function openNew() {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
}

function hideDialog() {
    productDialog.value = false;
    submitted.value = false;
}

function saveProduct() {
    submitted.value = true;

    if (product?.value.name?.trim()) {
        if (product.value.id) {
            product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus;
            products.value[findIndexById(product.value.id)] = product.value;
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        } else {
            product.value.id = createId();
            product.value.code = createId();
            product.value.image = 'product-placeholder.svg';
            product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
            products.value.push(product.value);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }

        productDialog.value = false;
        product.value = {};
    }
}

function editProduct(prod) {
    product.value = { ...prod };
    productDialog.value = true;
}

function confirmDeleteProduct(prod) {
    product.value = prod;
    deleteProductDialog.value = true;
}

function deleteProduct() {
    products.value = products.value.filter((val) => val.id !== product.value.id);
    deleteProductDialog.value = false;
    product.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
}

function findIndexById(id) {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

function createId() {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

function exportCSV() {
    dt.value.exportCSV();
}

function confirmDeleteSelected() {
    deleteProductsDialog.value = true;
}

function deleteSelectedProducts() {
    products.value = products.value.filter((val) => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
}

function getStatusLabel(status) {
    switch (status) {
        case 'RUNNING':
            return 'success';
        case 'STOPPED':
            return 'danger';
        case 'MAINTENANCE':
            return 'warning';
        default:
            return null;
    }
}
</script>

<template>
    <div>
        <div class="card">
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="secondary" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar>
            <DataTable
                ref="dt"
                v-model:selection="selectedProducts"
                :value="products"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} machines"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0">Manage Machines</h4>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>
                            <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                            <Column field="code" header="Code" sortable style="min-width: 12rem"></Column>
                            <Column field="name" header="Machine Name" sortable style="min-width: 16rem"></Column>
                            <Column field="url" header="URL" sortable style="min-width: 16rem">
                                <template #body="slotProps">
                                    <a :href="slotProps.data.url" target="_blank" class="text-blue-600 hover:text-blue-800">
                                        {{ slotProps.data.url }}
                                    </a>
                                </template>
                            </Column>
                            <Column field="description" header="Description" sortable style="min-width: 20rem"></Column>
                <Column field="status" header="Status" sortable style="min-width: 12rem">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="getStatusLabel(slotProps.data.status)" />
                    </template>
                </Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Machine Details" :modal="true">
            <div class="flex flex-col gap-6">
                <div>
                    <label for="name" class="block font-bold mb-3">Machine Name</label>
                    <InputText id="name" v-model.trim="product.name" required="true" autofocus :invalid="submitted && !product.name" fluid />
                    <small v-if="submitted && !product.name" class="text-red-500">Machine name is required.</small>
                </div>
                <div>
                    <label for="url" class="block font-bold mb-3">URL</label>
                    <InputText id="url" v-model.trim="product.url" required="true" autofocus :invalid="submitted && !product.url" fluid />
                    <small v-if="submitted && !product.url" class="text-red-500">URL name is required.</small>
                </div>
                <div>
                    <label for="description" class="block font-bold mb-3">Description</label>
                    <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" fluid />
                </div>
                <div>
                    <label for="status" class="block font-bold mb-3">Status</label>
                    <Select id="status" v-model="product.status" :options="statuses" optionLabel="label" placeholder="Select a Status" fluid></Select>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveProduct" />
            </template>
        </Dialog>
        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="product"
                    >Are you sure you want to delete <b>{{ product.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
                <Button label="Yes" icon="pi pi-check" @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
    </div>
</template>